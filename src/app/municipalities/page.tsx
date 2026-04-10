import { Building2, Plane, TrainFront, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { municipalities, regions } from "@/data/municipalities";

export default function MunicipalitiesPage() {
  return (
    <>
      <PageHeader
        title="市町村紹介"
        subtitle="宮崎県26市町村をエリア別に紹介。各市町村への空港・駅からのアクセス情報付き。"
        icon={Building2}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Region nav */}
        <div className="flex flex-wrap gap-2 mb-8">
          {regions.map((region) => (
            <a
              key={region}
              href={`#${region}`}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-surface border border-border text-muted hover:text-foreground hover:border-primary/30 transition-colors"
            >
              {region}
            </a>
          ))}
        </div>

        {regions.map((region) => {
          const items = municipalities.filter((m) => m.region === region);
          if (items.length === 0) return null;
          return (
            <section key={region} id={region} className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-2 mb-5">
                <h2 className="text-lg font-bold">{region}</h2>
                <span className="text-xs text-muted bg-background px-2 py-0.5 rounded-md border border-border">
                  {items.length}市町村
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((m) => (
                  <div
                    key={m.name}
                    className="bg-surface rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold">{m.name}</h3>
                        <span className="text-xs bg-secondary-light text-secondary px-1.5 py-0.5 rounded font-medium">
                          {m.type}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-muted">
                        <Users size={12} strokeWidth={1.8} />
                        {m.population}
                      </span>
                    </div>

                    <p className="text-sm text-muted leading-relaxed mb-3">
                      {m.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {m.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs bg-primary-light text-primary-hover px-2 py-0.5 rounded-md font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-border pt-3 grid grid-cols-2 gap-2 text-xs text-muted">
                      <div className="flex items-center gap-1.5">
                        <Plane size={12} strokeWidth={1.8} />
                        <span>空港から: {m.accessFromAirport}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <TrainFront size={12} strokeWidth={1.8} />
                        <span>宮崎駅から: {m.accessFromStation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
