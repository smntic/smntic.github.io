import { formatTimeSpan } from 'lib/formatDate';
import Card from './Card';
import TagList from './TagList';
import { ProjectPost } from 'lib/mdParser';

interface ProjectCardProps {
  post: ProjectPost;
}

export default function ProjectCard({ post }: ProjectCardProps) {
  const { slug, frontmatter } = post;
  const { title, description, startDate, endDate, tags } = frontmatter;

  return (
    <Card href={`/projects/${slug}`}>
      <div className="flex justify-between gap-2">
        <div className="flex flex-wrap space-x-2 items-center">
          <h1 className="text-xl font-semibold text-foreground">{title}</h1>
          {tags && (
            <div className="my-1">
              <TagList tags={tags} />
            </div>
          )}
        </div>
        <p className="inline-flex items-center text-sm text-gray-400">
          {formatTimeSpan(startDate, endDate)}
        </p>
      </div>
      <p className="leading-5 pb-1">{description}</p>
    </Card>
  );
}
