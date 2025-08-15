import { formatDateLong } from 'lib/formatDate';
import { BlogPost } from 'lib/mdParser';
import Card from './Card';
import TagList from './TagList';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { slug, frontmatter } = post;
  const { title, shortTitle, date, tags } = frontmatter;

  return (
    <Card href={`/blog/${slug}`}>
      <div className="flex justify-between gap-2">
        <div className="flex flex-wrap space-x-2 items-center">
          <h1 className="text-xl font-semibold text-foreground">{title}</h1>
          {tags && (
            <div className="my-1">
              <TagList tags={tags} />
            </div>
          )}
        </div>
        <p className="text-sm text-gray-400">{formatDateLong(date)}</p>
      </div>
      <h3>{shortTitle}</h3>
    </Card>
  );
}
