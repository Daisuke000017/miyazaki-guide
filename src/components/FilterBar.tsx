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
    <div className="bg-surface border border-border rounded-xl p-4 md:p-5 space-y-4">
      {/* Search */}
      <div className="relative">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
          strokeWidth={1.8}
        />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-full pl-9 pr-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Category */}
        <div className="flex-1">
          <label className="text-xs font-medium text-muted block mb-1.5">
            {categoryLabel}
          </label>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => onCategoryChange("")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === ""
                  ? "bg-foreground text-background"
                  : "bg-background text-muted hover:text-foreground border border-border"
              }`}
            >
              すべて
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-foreground text-background"
                    : "bg-background text-muted hover:text-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Area */}
        <div className="flex-1">
          <label className="text-xs font-medium text-muted block mb-1.5">
            {areaLabel}
          </label>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => onAreaChange("")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedArea === ""
                  ? "bg-foreground text-background"
                  : "bg-background text-muted hover:text-foreground border border-border"
              }`}
            >
              すべて
            </button>
            {areas.map((area) => (
              <button
                key={area}
                onClick={() => onAreaChange(area)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedArea === area
                    ? "bg-foreground text-background"
                    : "bg-background text-muted hover:text-foreground border border-border"
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
