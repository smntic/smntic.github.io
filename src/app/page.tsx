import { Metadata } from 'next';
import { makeMetadata } from 'lib/metadata';
import CardList from 'components/CardList';
import { getBlogPost, getProjectPost } from 'lib/mdParser';
import ProjectCard from 'components/ProjectCard';
import BlogCard from 'components/BlogCard';
import Link from 'next/link';

export const metadata: Metadata = makeMetadata('Welcome');

export default function Home() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>
        Hi! I&apos;m Simon, a second-year computer science student at Simon Fraser University with over a
        decade of passion for computing. In recent years, I&apos;ve accelerated my learning by tackling
        more complex projects and advanced coursework. My interests in CS span efficient software
        development methods, reinforcement learning and creating intelligent agents to explore
        virtual worlds. I&apos;m also fascinated by novel machine learning approaches inspired by
        biological systems, evolutionary algorithms and emergent behaviours in cellular automata.
        Alongside my studies, I actively practice competitive programming and am currently preparing
        for the ICPC Pacific Northwest Regionals this November.
      </p>
      <p>
        Feel free to check out my <Link href="/projects">projects</Link> and <Link href="/blogs">blogs</Link>.
      </p>
      <h2>Featured Projects</h2>
      <CardList>
        <ProjectCard post={getProjectPost('synthscript')} />
        <ProjectCard post={getProjectPost('huemaster')} />
        <ProjectCard post={getProjectPost('cp-tool')} />
      </CardList>

      <h2>Featured Blogs</h2>
      <CardList>
        <BlogCard post={getBlogPost('first-post')} />
      </CardList>
    </>
  );
}
