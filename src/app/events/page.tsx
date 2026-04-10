import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { events } from "@/data/events";

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="イベント・祭り"
        subtitle="宮崎の四季を彩るイベント情報"
        emoji="🎆"
      />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card
              key={event.name}
              title={event.name}
              description={event.description}
              emoji={event.emoji}
              tags={[event.period, event.area, ...event.tags]}
            />
          ))}
        </div>
      </section>
    </>
  );
}
