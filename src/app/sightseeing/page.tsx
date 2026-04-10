import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { sightseeingSpots } from "@/data/sightseeing";

export default function SightseeingPage() {
  return (
    <>
      <PageHeader
        title="観光スポット"
        subtitle="神話と絶景の宝庫・宮崎のおすすめスポット"
        emoji="🏞️"
      />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sightseeingSpots.map((spot) => (
            <Card
              key={spot.name}
              title={spot.name}
              description={spot.description}
              emoji={spot.emoji}
              tags={[spot.area, ...spot.tags]}
            />
          ))}
        </div>
      </section>
    </>
  );
}
