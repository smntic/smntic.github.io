interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <div className="not-prose inline-flex items-center justify-center bg-tag-background rounded-full py-1 px-2">
      <span className="!text-muted text-tag m-0">{text}</span>
    </div>
  );
}
