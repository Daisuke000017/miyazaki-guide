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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Region nav */}
        <div className="flex flex-wrap gap-2 mb-10">
          {regions.map((region) => (
            <a
              key={region}
              href={`#${region}`}
              className="px-4 py-2 rounded-full text-sm font-bold bg-primary-light text-primary-hover hover:bg-primary hover:text-white transition-colors"
            >
              {region}
            </a>
          ))}
        </div>

        {regions.map((region) => {
          const items = municipalities.filter((m) => m.region === region);
          if (items.length === 0) return null;
          return (
            <section key={region} id={region} className="mb-14 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold">{region}</h2>
                <span className="text-sm text-muted bg-primary-light px-3 py-1 rounded-full font-bold">
                  {items.length}市町村
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {items.map((m) => (
                  <div
                    key={m.name}
                    className="bg-surface rounded-2xl border-2 border-border p-6 hover:border-primary hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-lg font-bold">{m.name}</h3>
                        <span className="text-sm bg-secondary-light text-secondary font-bold px-2.5 py-0.5 rounded-full">
                          {m.type}
                        </span>
                      </div>
                      <span className="flex items-center gap-1.5 text-sm text-muted">
                        <Users size={14} strokeWidth={2} />
                        {m.population}
                      </span>
                    </div>

                    <p className="text-base text-muted leading-relaxed mb-4">
                      {m.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {m.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-sm bg-primary-light text-primary-hover px-3 py-1 rounded-full font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="border-t-2 border-border pt-4 grid grid-cols-2 gap-3 text-sm text-muted">
                      <div className="flex items-center gap-2">
                        <Plane size={15} strokeWidth={2} className="text-primary" />
                        <span>空港から: {m.accessFromAirport}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrainFront size={15} strokeWidth={2} className="text-secondary" />
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
