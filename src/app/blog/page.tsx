import { Metadata } from 'next';
import { makeMetadata } from 'lib/metadata';
import { makeMdxListPage } from 'components/MdxListPage';
import { getAllBlogPosts } from 'lib/mdParser';
import BlogCard from 'components/BlogCard';

export const metadata: Metadata = makeMetadata('Blog', "smntic's blog posts");

export default makeMdxListPage(
  getAllBlogPosts,
  (post) => <BlogCard key={post.slug} post={post} />,
  <>
    <h1>Blog</h1>
    <p>
      I started this blog to informally post my own research and other projects that I've been
      working on. Read some of them if you'd like... or don't, it's up to you :).
    </p>
  </>,
);
