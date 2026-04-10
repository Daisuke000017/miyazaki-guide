import PageHeader from "@/components/PageHeader";
import { municipalities } from "@/data/municipalities";

const regions = [
  "県央",
  "県北",
  "県西",
  "県南",
  "西都・児湯",
  "県北（高千穂エリア）",
];

export default function MunicipalitiesPage() {
  return (
    <>
      <PageHeader
        title="市町村紹介"
        subtitle="宮崎県26市町村、それぞれに個性と魅力がいっぱい"
        emoji="🏘️"
      />
      <section className="max-w-6xl mx-auto px-4 py-12">
        {regions.map((region) => {
          const items = municipalities.filter((m) => m.region === region);
          if (items.length === 0) return null;
          return (
            <div key={region} className="mb-12">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                  {region}
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((m) => (
                  <div
                    key={m.name}
                    className="bg-card-bg rounded-2xl shadow-md border border-primary-light/20 p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold">
                        {m.name}
                        <span className="text-xs ml-2 bg-secondary-light/20 text-secondary px-2 py-0.5 rounded-full">
                          {m.type}
                        </span>
                      </h3>
                      <span className="text-xs text-foreground/50">
                        {m.population}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/70 mb-3">
                      {m.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {m.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs bg-primary-light/20 text-primary-dark px-2 py-0.5 rounded-full"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-foreground/60 space-y-1 border-t border-primary-light/10 pt-3">
                      <p>
                        ✈️ 宮崎空港から: {m.accessFromMiyazakiAirport}
                      </p>
                      <p>
                        🚃 宮崎駅から: {m.accessFromMiyazakiStation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
