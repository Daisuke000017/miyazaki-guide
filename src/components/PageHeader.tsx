import type { LucideIcon } from "lucide-react";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
};

export default function PageHeader({
  title,
  subtitle,
  icon: Icon,
}: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-hero-from via-hero-via to-hero-to text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="flex items-center gap-4 mb-3">
          {Icon && (
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <Icon size={26} className="text-white" strokeWidth={2} />
            </div>
          )}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {title}
          </h1>
        </div>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
