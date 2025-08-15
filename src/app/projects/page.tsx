import { Metadata } from 'next';
import { makeMetadata } from 'lib/metadata';
import { makeMdxListPage } from 'components/MdxListPage';
import { getAllProjectPosts } from 'lib/mdParser';
import ProjectCard from 'components/ProjectCard';

export const metadata: Metadata = makeMetadata('Projects', "smntic's projects");

export default makeMdxListPage(
  getAllProjectPosts,
  (post) => <ProjectCard key={post.slug} post={post} />,
  <>
    <h1>Projects</h1>
    <p>I&apos;ve worked on lots of projects in the last few years. These are some of my favourites!</p>
  </>,
);
