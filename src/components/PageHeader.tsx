import type { LucideIcon } from "lucide-react";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  backgroundImage?: string;
};

export default function PageHeader({
  title,
  subtitle,
  icon: Icon,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Background image layer */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 ${
          backgroundImage
            ? "bg-gradient-to-r from-hero-from/85 via-hero-via/75 to-hero-to/80"
            : "bg-gradient-to-r from-hero-from via-hero-via to-hero-to"
        }`}
      />
      {/* Content */}
      <div className="relative text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="flex items-center gap-4 mb-3">
            {Icon && (
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <Icon size={26} className="text-white" strokeWidth={2} />
              </div>
            )}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight drop-shadow-sm">
              {title}
            </h1>
          </div>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-sm">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
