import React from "react";

export default function MarketingLoading() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col bg-white animate-pulse">
      {/* Top Banner Skeleton */}
      <div className="w-full bg-[#003BE2] min-h-[50vh] flex flex-col items-center justify-center p-8 pt-32">
        <div className="container mx-auto flex flex-col items-center gap-4 text-center max-w-2xl">
          <div className="h-6 w-36 bg-white/20 rounded-full" />
          <div className="h-12 w-4/5 bg-white/25 rounded-2xl" />
          <div className="h-4 w-3/5 bg-white/15 rounded-md" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-16 flex flex-col items-center gap-8">
        <div className="h-8 w-64 bg-gray-200 rounded-xl" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-80 w-full bg-gray-100 rounded-3xl border border-gray-200/50"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
