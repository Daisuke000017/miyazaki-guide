"use client";

import { useState, useMemo, useCallback } from "react";
import {
  MapPinned,
  Banknote,
  Star,
  UtensilsCrossed,
  ExternalLink,
  X,
  MapPin,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import FilterBar from "@/components/FilterBar";
import {
  restaurants,
  gourmetCategories,
  gourmetAreas,
} from "@/data/gourmet";
import type { Restaurant } from "@/data/gourmet";
import { heroImages } from "@/data/images";

export default function GourmetPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [selected, setSelected] = useState<Restaurant | null>(null);

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

  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <>
      <PageHeader
        enTitle="Gourmet"
        title="グルメ"
        subtitle="宮崎県内の人気飲食店をカテゴリ・エリア別に厳選紹介"
        backgroundImage={heroImages.gourmet}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            <button
              key={r.name}
              type="button"
              onClick={() => setSelected(r)}
              className="bg-white rounded-3xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col text-left cursor-pointer"
            >
              {r.image && (
                <div className="w-full h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
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
                  <span className="text-xs bg-primary-light text-primary font-bold px-3 py-1 rounded-full shrink-0">
                    {r.category}
                  </span>
                </div>

                <p className="text-sm text-muted leading-relaxed flex-1 line-clamp-3">
                  {r.description}
                </p>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-secondary font-bold">
                    <Star size={15} strokeWidth={2} />
                    {r.signature}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {r.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary-light/60 text-muted px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
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

      {/* Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
          onClick={closeModal}
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="relative bg-white w-full sm:max-w-lg sm:rounded-3xl rounded-t-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white transition-colors shadow"
            >
              <X size={18} strokeWidth={2} />
            </button>

            {/* Image */}
            {selected.image && (
              <div className="w-full h-52 sm:h-60 overflow-hidden sm:rounded-t-3xl rounded-t-3xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold">{selected.name}</h2>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1.5 text-sm text-muted">
                      <MapPinned size={14} strokeWidth={2} />
                      {selected.area}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-muted">
                      <Banknote size={14} strokeWidth={2} />
                      {selected.priceRange}
                    </span>
                  </div>
                </div>
                <span className="text-xs bg-primary-light text-primary font-bold px-3 py-1 rounded-full shrink-0">
                  {selected.category}
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-5">
                {selected.description}
              </p>

              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2 text-sm text-secondary font-bold">
                  <Star size={15} strokeWidth={2} />
                  {selected.signature}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <MapPin size={14} strokeWidth={2} />
                  {selected.address}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary-light/60 text-muted px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-3">
                {selected.url && (
                  <a
                    href={selected.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full text-sm font-bold transition-all hover:bg-primary-hover hover:shadow-lg w-full"
                  >
                    <ExternalLink size={16} strokeWidth={2} />
                    公式サイトを見る
                  </a>
                )}
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex items-center justify-center gap-2 bg-primary-light text-primary px-6 py-3.5 rounded-full text-sm font-bold transition-all hover:bg-primary-subtle w-full"
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
