import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { SourceCode } from './sourceCode';
import { DateTime } from 'luxon';

const contentPath = 'src/content';

export type PostType = 'blog' | 'projects';

export interface BlogFrontmatter {
  title: string;
  shortTitle: string;
  date: Date;
  lastEdited?: Date;
  tags?: string[];
  sourceCode?: SourceCode;
  [key: string]: any;
}

export interface ProjectFrontmatter {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  tags?: string[];
  sourceCode?: SourceCode;
  [key: string]: any;
}

export type FrontmatterMap = {
  blog: BlogFrontmatter;
  projects: ProjectFrontmatter;
};

export interface Post<T extends PostType> {
  slug: string;
  frontmatter: FrontmatterMap[T];
  content?: string;
}
export type ProjectPost = Post<'projects'>;
export type BlogPost = Post<'blog'>;

function getStaticParams<T extends PostType>(postType: T) {
  const postsDir = path.join(contentPath, postType);
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({ slug: file.replace(/\.mdx$/, '') }));
}

function getPost<T extends PostType>(postType: T, slug: string): Post<T> {
  const filePath = path.join(contentPath, postType, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) throw new Error(`Post not found: ${slug}`);

  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContents);

  const timeZone = 'America/Vancouver';

  // gray matter reads the date strings as UTC... so i convert them to DateTime objects,
  // then read them as PT (my local time), then convert them back to Dates... recursively
  function convertDatesToPT(obj: any): any {
    if (obj instanceof Date) {
      return DateTime.fromJSDate(obj, { zone: 'UTC' })
        .setZone(timeZone, { keepLocalTime: true })
        .toJSDate();
    } else if (Array.isArray(obj)) {
      return obj.map((item) => convertDatesToPT(item));
    } else if (obj && typeof obj === 'object') {
      return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, convertDatesToPT(v)]));
    }
    return obj;
  }

  return {
    slug,
    frontmatter: convertDatesToPT(frontmatter) as FrontmatterMap[T],
    content,
  };
}

function getAllPosts<T extends PostType>(
  postType: T,
  dateKey: keyof FrontmatterMap[T],
): Omit<Post<T>, 'content'>[] {
  const files = fs.readdirSync(path.join(contentPath, postType)).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const { frontmatter } = getPost(postType, slug);
    return { slug, frontmatter };
  });

  return posts.sort((a, b) => {
    const aVal = a.frontmatter[dateKey];
    const bVal = b.frontmatter[dateKey];

    const aTime = aVal ? new Date(aVal as string).getTime() : 0;
    const bTime = bVal ? new Date(bVal as string).getTime() : 0;

    return bTime - aTime;
  });
}

export const getBlogStaticParams = () => getStaticParams('blog');
export const getProjectStaticParams = () => getStaticParams('projects');

export const getBlogPost = (slug: string) => getPost('blog', slug);
export const getProjectPost = (slug: string) => getPost('projects', slug);

export const getAllBlogPosts = () => getAllPosts('blog', 'date');
export const getAllProjectPosts = () => getAllPosts('projects', 'endDate');
