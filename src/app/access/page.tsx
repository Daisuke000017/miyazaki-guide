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
  airport: {
    label: "空港",
    icon: Plane,
    color: "text-primary bg-primary-light",
  },
  station: {
    label: "駅",
    icon: TrainFront,
    color: "text-secondary bg-secondary-light",
  },
  ic: {
    label: "IC",
    icon: Car,
    color: "text-accent bg-accent-light",
  },
};

export default function AccessPage() {
  return (
    <>
      <PageHeader
        title="アクセス情報"
        subtitle="宮崎への行き方と県内主要交通拠点からの所要時間を一覧で確認"
        icon={TrainFront}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {accessTips.map((tip) => (
            <div
              key={tip.title}
              className="bg-primary-light/50 border-2 border-primary-subtle rounded-2xl p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb
                  size={18}
                  className="text-primary"
                  strokeWidth={2}
                />
                <h3 className="text-base font-bold">{tip.title}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        {/* Access Points */}
        <div className="space-y-8">
          {accessPoints.map((point) => {
            const config = typeConfig[point.type];
            const Icon = config.icon;
            return (
              <div
                key={point.name}
                className="bg-surface rounded-2xl border-2 border-border overflow-hidden"
              >
                <div className="p-6 border-b-2 border-border">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${config.color}`}
                    >
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{point.name}</h3>
                      <span
                        className={`text-sm font-bold ${config.color} px-2.5 py-0.5 rounded-full`}
                      >
                        {config.label}
                      </span>
                    </div>
                  </div>
                  <p className="text-base text-muted mt-4 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="divide-y-2 divide-border">
                  {point.connections.map((conn) => (
                    <div
                      key={conn.destination}
                      className="flex items-center justify-between px-6 py-4 hover:bg-primary-light/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <ArrowRight
                          size={16}
                          className="text-muted"
                          strokeWidth={2}
                        />
                        <span className="text-base font-bold">
                          {conn.destination}
                        </span>
                      </div>
                      <div className="flex items-center gap-5">
                        <span className="text-sm text-muted">
                          {conn.method}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm font-bold text-primary bg-primary-light px-3 py-1 rounded-full">
                          <Clock size={13} strokeWidth={2} />
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
