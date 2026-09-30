import React from "react";

export default function CreatorsLoading() {
  return (
    <div className="w-full min-h-screen bg-[#FDFDFD] pb-24">
      {/* Hero Banner Skeleton */}
      <div className="w-full bg-[#003BE2] pt-36 pb-20 px-4 text-white">
        <div className="container mx-auto flex flex-col items-center gap-6 text-center max-w-2xl animate-pulse">
          <div className="h-6 w-36 bg-white/20 rounded-full" />
          <div className="h-12 w-4/5 bg-white/25 rounded-2xl" />
          <div className="h-4 w-3/5 bg-white/15 rounded-md" />
        </div>
      </div>

      {/* Creators Grid Skeleton */}
      <div className="container mx-auto px-4 py-16">
        <div className="h-6 w-48 bg-gray-200 rounded-md mb-8 animate-pulse" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white border border-[#CED0D3]/60 rounded-3xl p-6 flex flex-col items-center gap-4 animate-pulse shadow-xs"
            >
              {/* Avatar Skeleton */}
              <div className="size-20 rounded-full bg-gray-200" />
              {/* Name & Role Skeleton */}
              <div className="h-5 w-32 bg-gray-200 rounded-md" />
              <div className="h-4 w-24 bg-gray-100 rounded-md" />
              {/* Stats Skeleton */}
              <div className="flex gap-4 w-full justify-center pt-3 border-t border-gray-100">
                <div className="h-4 w-16 bg-gray-100 rounded-md" />
                <div className="h-4 w-16 bg-gray-100 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
