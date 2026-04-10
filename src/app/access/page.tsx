import {
  TrainFront,
  Plane,
  Car,
  Lightbulb,
  Clock,
  ArrowRight,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { accessPoints, accessTips } from "@/data/access";

const typeConfig = {
  airport: { label: "空港", icon: Plane, color: "text-primary bg-primary-light" },
  station: { label: "駅", icon: TrainFront, color: "text-secondary bg-secondary-light" },
  ic: { label: "IC", icon: Car, color: "text-accent bg-accent-light" },
};

export default function AccessPage() {
  return (
    <>
      <PageHeader
        title="アクセス情報"
        subtitle="宮崎への行き方と県内主要交通拠点からの所要時間を一覧で確認"
        icon={TrainFront}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {accessTips.map((tip) => (
            <div
              key={tip.title}
              className="bg-surface border border-border rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb
                  size={14}
                  className="text-primary"
                  strokeWidth={1.8}
                />
                <h3 className="text-sm font-semibold">{tip.title}</h3>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        {/* Access Points */}
        <div className="space-y-6">
          {accessPoints.map((point) => {
            const config = typeConfig[point.type];
            const Icon = config.icon;
            return (
              <div
                key={point.name}
                className="bg-surface rounded-xl border border-border overflow-hidden"
              >
                <div className="p-5 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${config.color}`}
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{point.name}</h3>
                      <span
                        className={`text-xs font-medium ${config.color} px-1.5 py-0.5 rounded`}
                      >
                        {config.label}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted mt-3 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="divide-y divide-border">
                  {point.connections.map((conn) => (
                    <div
                      key={conn.destination}
                      className="flex items-center justify-between px-5 py-3 hover:bg-background transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <ArrowRight
                          size={14}
                          className="text-muted"
                          strokeWidth={1.8}
                        />
                        <span className="text-sm font-medium">
                          {conn.destination}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-muted">
                          {conn.method}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-medium text-primary bg-primary-light px-2 py-0.5 rounded-md">
                          <Clock size={10} strokeWidth={2} />
                          {conn.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
