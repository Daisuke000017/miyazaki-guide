import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { gourmetItems } from "@/data/gourmet";

export default function GourmetPage() {
  return (
    <>
      <PageHeader
        title="宮崎グルメ"
        subtitle="南国の恵みが詰まった絶品グルメをご紹介"
        emoji="🍗"
      />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gourmetItems.map((item) => (
            <Card
              key={item.name}
              title={item.name}
              description={item.description}
              emoji={item.emoji}
              tags={[item.area, ...item.tags]}
            />
          ))}
        </div>
      </section>
    </>
  );
}
