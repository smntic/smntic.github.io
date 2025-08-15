import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { makeMetadata } from 'lib/metadata';

type Loader<T> = (slug: string) => { content?: string; frontmatter: T };

export function makeMdxPostPage<T extends { title: string; description?: string }>(
  getPost: Loader<T>,
  renderFrontmatter: (frontmatter: T) => React.ReactNode,
) {
  const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    let post;
    try {
      post = getPost(slug);
    } catch {
      return notFound();
    }

    return (
      <div>
        {renderFrontmatter(post.frontmatter)}
        {post.content && <MDXRemote source={post.content} />}
      </div>
    );
  };

  const _generateMetadata = async ({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }): Promise<Metadata> => {
    const { slug } = await params;
    let post;
    try {
      post = getPost(slug);
    } catch {
      notFound();
    }
    return makeMetadata(post.frontmatter.title);
  };

  return { Page, _generateMetadata };
}
