"use client";

import { useState, useMemo } from "react";
import { MapPin, Navigation, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import FilterBar from "@/components/FilterBar";
import {
  sightseeingSpots,
  sightseeingCategories,
  sightseeingAreas,
} from "@/data/sightseeing";

export default function SightseeingPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");

  const filtered = useMemo(() => {
    return sightseeingSpots.filter((s) => {
      const matchSearch =
        search === "" ||
        s.name.includes(search) ||
        s.description.includes(search) ||
        s.highlight.includes(search) ||
        s.tags.some((t) => t.includes(search));
      const matchCategory = category === "" || s.category === category;
      const matchArea = area === "" || s.area === area;
      return matchSearch && matchCategory && matchArea;
    });
  }, [search, category, area]);

  return (
    <>
      <PageHeader
        title="観光スポット"
        subtitle="宮崎県内の人気観光スポットをカテゴリ・エリア別に厳選紹介"
        icon={MapPin}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          categories={[...sightseeingCategories]}
          selectedCategory={category}
          onCategoryChange={setCategory}
          areas={[...sightseeingAreas]}
          selectedArea={area}
          onAreaChange={setArea}
          searchPlaceholder="スポット名・キーワードで検索..."
        />

        <p className="text-xs text-muted mt-4 mb-6">
          {filtered.length} 件のスポットが見つかりました
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((s) => (
            <div
              key={s.name}
              className="bg-surface rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-sm transition-all duration-200 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-base font-semibold">{s.name}</h3>
                  <span className="flex items-center gap-1 text-xs text-muted mt-1">
                    <MapPin size={12} strokeWidth={1.8} />
                    {s.area}
                  </span>
                </div>
                <span className="text-xs bg-secondary-light text-secondary px-2 py-0.5 rounded-md font-medium shrink-0">
                  {s.category}
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed flex-1">
                {s.description}
              </p>

              <div className="mt-3 pt-3 border-t border-border space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                  <Sparkles size={12} strokeWidth={1.8} />
                  {s.highlight}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <Navigation size={12} strokeWidth={1.8} />
                  {s.accessNote}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {s.tags.map((tag) => (
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

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <MapPin
              size={40}
              className="text-border mx-auto mb-4"
              strokeWidth={1.2}
            />
            <p className="text-muted text-sm">
              条件に一致するスポットが見つかりませんでした
            </p>
          </div>
        )}
      </div>
    </>
  );
}
