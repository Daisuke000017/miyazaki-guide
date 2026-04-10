"use client";

import { useState, useMemo } from "react";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { events, eventCategories } from "@/data/events";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filtered = useMemo(() => {
    if (selectedCategory === "") return events;
    return events.filter((e) => e.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <PageHeader
        title="イベント・祭り"
        subtitle="宮崎の四季を彩る伝統行事、花の名所、スポーツイベントを紹介"
        icon={CalendarDays}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory("")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              selectedCategory === ""
                ? "bg-foreground text-background"
                : "bg-surface text-muted hover:text-foreground border border-border"
            }`}
          >
            すべて
          </button>
          {eventCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-foreground text-background"
                  : "bg-surface text-muted hover:text-foreground border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="text-xs text-muted mb-6">
          {filtered.length} 件のイベント
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((event) => (
            <div
              key={event.name}
              className="bg-surface rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-sm transition-all duration-200 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base font-semibold">{event.name}</h3>
                <span className="text-xs bg-primary-light text-primary px-2 py-0.5 rounded-md font-medium shrink-0">
                  {event.category}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center gap-1 text-xs text-primary font-medium">
                  <CalendarDays size={12} strokeWidth={1.8} />
                  {event.period}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted">
                  <MapPin size={12} strokeWidth={1.8} />
                  {event.area}
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed flex-1">
                {event.description}
              </p>

              <div className="mt-3 pt-3 border-t border-border">
                <div className="flex items-center gap-1.5 text-xs text-secondary font-medium">
                  <Sparkles size={12} strokeWidth={1.8} />
                  {event.highlight}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-background text-muted px-2 py-0.5 rounded-md border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
