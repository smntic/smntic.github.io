import { Metadata } from 'next';
import { makeMdxPostPage } from 'components/MdxPostPage';
import { getProjectPost, getProjectStaticParams } from 'lib/mdParser';
import TagList from 'components/TagList';
import SourceCodeLink from 'components/SourceCodeLink';

export async function generateStaticParams() {
  return getProjectStaticParams();
}

const { Page, _generateMetadata } = makeMdxPostPage(getProjectPost, (fm) => (
  <div className="mb-10">
    <h1 className="mt-0 mb-2">{fm.title}</h1>
    {fm.tags && (
      <div className="mb-2">
        <TagList tags={fm.tags} />
      </div>
    )}
    {fm.sourceCode && (
      <div>
        <SourceCodeLink sourceCode={fm.sourceCode} />
      </div>
    )}
  </div>
));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return _generateMetadata({ params });
}

export default Page;
