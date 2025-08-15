type SocialLinkProps = {
  icon: React.ReactNode;
  href?: string;
  label: string;
};

export default function SocialLink({ icon, href, label }: SocialLinkProps) {
  const content = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  ) : (
    <span>{label}</span>
  );

  return (
    <div className="inline-flex items-center space-x-2">
      <span className="flex-shrink-0">{icon}</span>
      {content}
    </div>
  );
}
