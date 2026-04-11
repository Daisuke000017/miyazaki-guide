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
import { heroImages } from "@/data/images";

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
        enTitle="Sightseeing"
        title="観光スポット"
        subtitle="宮崎県内の人気観光スポットをカテゴリ・エリア別に厳選紹介"
        backgroundImage={heroImages.sightseeing}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

        <p className="text-sm text-muted mt-5 mb-6 font-medium">
          {filtered.length} 件のスポットが見つかりました
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s) => (
            <div
              key={s.name}
              className="bg-white rounded-3xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold">{s.name}</h3>
                  <span className="flex items-center gap-1.5 text-sm text-muted mt-1">
                    <MapPin size={14} strokeWidth={2} />
                    {s.area}
                  </span>
                </div>
                <span className="text-xs bg-primary-light text-primary font-bold px-3 py-1 rounded-full shrink-0">
                  {s.category}
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed flex-1">
                {s.description}
              </p>

              <div className="mt-4 pt-4 border-t border-border space-y-2">
                <div className="flex items-center gap-2 text-sm text-secondary font-bold">
                  <Sparkles size={15} strokeWidth={2} />
                  {s.highlight}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Navigation size={14} strokeWidth={2} />
                  {s.accessNote}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {s.tags.map((tag) => (
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

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <MapPin
              size={48}
              className="text-border mx-auto mb-4"
              strokeWidth={1.5}
            />
            <p className="text-muted text-lg">
              条件に一致するスポットが見つかりませんでした
            </p>
          </div>
        )}
      </div>
    </>
  );
}
