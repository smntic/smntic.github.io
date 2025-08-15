import { Metadata } from 'next';
import { getBlogPost, getBlogStaticParams } from 'lib/mdParser';
import { makeMdxPostPage } from 'components/MdxPostPage';
import { formatDateLong } from 'lib/formatDate';
import TagList from 'components/TagList';
import SourceCodeLink from 'components/SourceCodeLink';

export async function generateStaticParams() {
  return getBlogStaticParams();
}

const { Page, _generateMetadata } = makeMdxPostPage(getBlogPost, (fm) => (
  <div className="mb-10">
    <h1 className="mt-0 mb-1">{fm.title}</h1>
    <h3 className="mt-0 mb-2">{fm.shortTitle}</h3>
    <p className="mb-4 text-muted text-sm">
      {formatDateLong(fm.date)}
      {fm.lastEdited && (
        <>
          <br />
          Edited: {formatDateLong(fm.lastEdited)}
        </>
      )}
    </p>
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
