type PageHeaderProps = {
  title: string;
  subtitle?: string;
  enTitle?: string;
  backgroundImage?: string;
};

export default function PageHeader({
  title,
  subtitle,
  enTitle,
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
            ? "bg-gradient-to-r from-white/90 via-white/70 to-white/80"
            : "bg-grid"
        }`}
      />
      {/* Content */}
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {enTitle && (
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-1">
              {enTitle}
            </h1>
          )}
          {!enTitle && (
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-1">
              {title}
            </h1>
          )}
          <p className="text-sm font-semibold text-primary tracking-wider">
            {enTitle ? title : ""}
          </p>
          {subtitle && (
            <p className="text-base text-muted max-w-2xl leading-relaxed mt-4">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
