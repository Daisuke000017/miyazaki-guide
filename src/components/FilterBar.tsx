"use client";

import { Search } from "lucide-react";

type FilterBarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  areas: string[];
  selectedArea: string;
  onAreaChange: (area: string) => void;
  searchPlaceholder?: string;
  categoryLabel?: string;
  areaLabel?: string;
};

export default function FilterBar({
  searchValue,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  areas,
  selectedArea,
  onAreaChange,
  searchPlaceholder = "キーワードで検索...",
  categoryLabel = "カテゴリ",
  areaLabel = "エリア",
}: FilterBarProps) {
  return (
    <div className="bg-white rounded-3xl border border-border p-5 md:p-6 space-y-5">
      {/* Search */}
      <div className="relative">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          strokeWidth={2}
        />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-full pl-12 pr-4 py-3.5 bg-background border border-border rounded-2xl text-base text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Category */}
        <div className="flex-1">
          <label className="text-xs font-bold text-muted tracking-wider uppercase block mb-2">
            {categoryLabel}
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange("")}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                selectedCategory === ""
                  ? "bg-primary text-white"
                  : "bg-primary-light text-muted hover:text-foreground"
              }`}
            >
              すべて
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
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
        </div>

        {/* Area */}
        <div className="flex-1">
          <label className="text-xs font-bold text-muted tracking-wider uppercase block mb-2">
            {areaLabel}
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onAreaChange("")}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                selectedArea === ""
                  ? "bg-secondary text-white"
                  : "bg-secondary-light text-muted hover:text-foreground"
              }`}
            >
              すべて
            </button>
            {areas.map((area) => (
              <button
                key={area}
                onClick={() => onAreaChange(area)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  selectedArea === area
                    ? "bg-secondary text-white"
                    : "bg-secondary-light text-muted hover:text-foreground"
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
