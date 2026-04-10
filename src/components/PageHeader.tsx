import type { LucideIcon } from "lucide-react";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
};

export default function PageHeader({ title, subtitle, icon: Icon }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-hero-from to-hero-to text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex items-center gap-3 mb-3">
          {Icon && (
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Icon size={22} className="text-primary" strokeWidth={1.8} />
            </div>
          )}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {title}
          </h1>
        </div>
        {subtitle && (
          <p className="text-base md:text-lg text-white/60 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
