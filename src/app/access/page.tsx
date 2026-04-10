import PageHeader from "@/components/PageHeader";
import { accessPoints, accessTips } from "@/data/access";

const typeLabels = {
  airport: "空港",
  station: "駅",
  ic: "インターチェンジ",
};

export default function AccessPage() {
  return (
    <>
      <PageHeader
        title="アクセス情報"
        subtitle="宮崎への行き方と県内の主要交通拠点"
        emoji="🚗"
      />

      {/* Tips */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {accessTips.map((tip) => (
            <div
              key={tip.title}
              className="bg-accent-light/10 border border-accent/20 rounded-2xl p-5"
            >
              <span className="text-2xl block mb-2">{tip.emoji}</span>
              <h3 className="font-bold text-sm mb-1">{tip.title}</h3>
              <p className="text-xs text-foreground/70">{tip.description}</p>
            </div>
          ))}
        </div>

        {/* Access Points */}
        <div className="space-y-8">
          {accessPoints.map((point) => (
            <div
              key={point.name}
              className="bg-card-bg rounded-2xl shadow-md border border-primary-light/20 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{point.emoji}</span>
                <div>
                  <h3 className="text-lg font-bold">{point.name}</h3>
                  <span className="text-xs bg-primary-light/20 text-primary-dark px-2 py-0.5 rounded-full">
                    {typeLabels[point.type]}
                  </span>
                </div>
              </div>
              <p className="text-sm text-foreground/70 mb-4">
                {point.description}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-primary-light/20">
                      <th className="text-left py-2 px-3 text-foreground/60 font-medium">
                        行き先
                      </th>
                      <th className="text-left py-2 px-3 text-foreground/60 font-medium">
                        交通手段
                      </th>
                      <th className="text-left py-2 px-3 text-foreground/60 font-medium">
                        所要時間
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {point.connections.map((conn) => (
                      <tr
                        key={conn.destination}
                        className="border-b border-primary-light/10"
                      >
                        <td className="py-2 px-3 font-medium">
                          {conn.destination}
                        </td>
                        <td className="py-2 px-3 text-foreground/70">
                          {conn.method}
                        </td>
                        <td className="py-2 px-3">
                          <span className="bg-secondary-light/20 text-secondary px-2 py-0.5 rounded-full text-xs font-medium">
                            {conn.duration}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
