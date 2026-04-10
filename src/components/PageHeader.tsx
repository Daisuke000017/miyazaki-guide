type PageHeaderProps = {
  title: string;
  subtitle?: string;
  emoji?: string;
};

export default function PageHeader({ title, subtitle, emoji }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-light text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {emoji && <span className="text-5xl block mb-4">{emoji}</span>}
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-lg opacity-90">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
