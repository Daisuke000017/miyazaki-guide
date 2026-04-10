import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  emoji?: string;
  href?: string;
  tags?: string[];
};

export default function Card({
  title,
  description,
  emoji,
  href,
  tags,
}: CardProps) {
  const content = (
    <div className="bg-card-bg rounded-2xl shadow-md hover:shadow-lg border border-primary-light/20 p-6 transition-all duration-200 hover:-translate-y-1 h-full flex flex-col">
      {emoji && <span className="text-3xl mb-3">{emoji}</span>}
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-foreground/70 flex-1">{description}</p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-primary-light/20 text-primary-dark px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
