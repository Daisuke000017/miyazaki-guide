import type { LucideIcon } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  meta?: string;
  tags?: string[];
  detail?: string;
};

export default function Card({
  title,
  description,
  icon: Icon,
  meta,
  tags,
  detail,
}: CardProps) {
  return (
    <div className="bg-surface rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-sm transition-all duration-200 h-full flex flex-col">
      <div className="flex items-start gap-3 mb-3">
        {Icon && (
          <div className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
            <Icon size={18} className="text-primary" strokeWidth={1.8} />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-foreground leading-snug">
            {title}
          </h3>
          {meta && (
            <p className="text-xs text-muted mt-0.5">{meta}</p>
          )}
        </div>
      </div>
      <p className="text-sm text-muted leading-relaxed flex-1">{description}</p>
      {detail && (
        <p className="text-xs text-muted/70 mt-2 pt-2 border-t border-border">
          {detail}
        </p>
      )}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-background text-muted px-2 py-0.5 rounded-md border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
