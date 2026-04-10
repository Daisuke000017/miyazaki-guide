"use client";

import { useState, useMemo } from "react";
import { UtensilsCrossed, MapPinned, Banknote, Star } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import FilterBar from "@/components/FilterBar";
import {
  restaurants,
  gourmetCategories,
  gourmetAreas,
} from "@/data/gourmet";

export default function GourmetPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");

  const filtered = useMemo(() => {
    return restaurants.filter((r) => {
      const matchSearch =
        search === "" ||
        r.name.includes(search) ||
        r.description.includes(search) ||
        r.signature.includes(search) ||
        r.tags.some((t) => t.includes(search));
      const matchCategory = category === "" || r.category === category;
      const matchArea = area === "" || r.area === area;
      return matchSearch && matchCategory && matchArea;
    });
  }, [search, category, area]);

  return (
    <>
      <PageHeader
        title="グルメ"
        subtitle="宮崎県内の人気飲食店をカテゴリ・エリア別に厳選紹介"
        icon={UtensilsCrossed}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          categories={[...gourmetCategories]}
          selectedCategory={category}
          onCategoryChange={setCategory}
          areas={[...gourmetAreas]}
          selectedArea={area}
          onAreaChange={setArea}
          searchPlaceholder="店名・料理名で検索..."
          categoryLabel="ジャンル"
        />

        <p className="text-sm text-muted mt-5 mb-6 font-medium">
          {filtered.length} 件の店舗が見つかりました
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r) => (
            <div
              key={r.name}
              className="bg-surface rounded-2xl border-2 border-border p-6 hover:border-primary hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold">{r.name}</h3>
                  <div className="flex items-center gap-4 mt-1.5">
                    <span className="flex items-center gap-1.5 text-sm text-muted">
                      <MapPinned size={14} strokeWidth={2} />
                      {r.area}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-muted">
                      <Banknote size={14} strokeWidth={2} />
                      {r.priceRange}
                    </span>
                  </div>
                </div>
                <span className="text-sm bg-primary-light text-primary-hover px-3 py-1 rounded-full font-bold shrink-0">
                  {r.category}
                </span>
              </div>

              <p className="text-base text-muted leading-relaxed flex-1">
                {r.description}
              </p>

              <div className="mt-4 pt-4 border-t-2 border-border">
                <div className="flex items-center gap-2 text-sm text-secondary font-bold">
                  <Star size={15} strokeWidth={2} />
                  {r.signature}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {r.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-primary-light/60 text-muted px-3 py-1 rounded-full"
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
            <UtensilsCrossed
              size={48}
              className="text-border mx-auto mb-4"
              strokeWidth={1.5}
            />
            <p className="text-muted text-lg">
              条件に一致する店舗が見つかりませんでした
            </p>
          </div>
        )}
      </div>
    </>
  );
}
