"use client";

import { useState, useMemo } from "react";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { events, eventCategories } from "@/data/events";
import { heroImages } from "@/data/images";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filtered = useMemo(() => {
    if (selectedCategory === "") return events;
    return events.filter((e) => e.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <PageHeader
        enTitle="Events"
        title="イベント・祭り"
        subtitle="宮崎の四季を彩る伝統行事、花の名所、スポーツイベントを紹介"
        backgroundImage={heroImages.events}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory("")}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
              selectedCategory === ""
                ? "bg-primary text-white"
                : "bg-primary-light text-muted hover:text-foreground"
            }`}
          >
            すべて
          </button>
          {eventCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                selectedCategory === cat
                  ? "bg-primary text-white"
                  : "bg-primary-light text-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="text-sm text-muted mb-6 font-medium">
          {filtered.length} 件のイベント
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event) => (
            <div
              key={event.name}
              className="bg-white rounded-3xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold">{event.name}</h3>
                <span className="text-xs bg-primary-light text-primary px-3 py-1 rounded-full font-bold shrink-0">
                  {event.category}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center gap-1.5 text-sm text-primary font-bold">
                  <CalendarDays size={15} strokeWidth={2} />
                  {event.period}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted">
                  <MapPin size={14} strokeWidth={2} />
                  {event.area}
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed flex-1">
                {event.description}
              </p>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-secondary font-bold">
                  <Sparkles size={15} strokeWidth={2} />
                  {event.highlight}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary-light/60 text-muted px-3 py-1 rounded-full"
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
