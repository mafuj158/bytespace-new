import React from "react";

export default function CourseDetailLoading() {
  return (
    <div className="w-full min-h-screen bg-[#FDFDFD] pb-24">
      {/* Hero Header Skeleton */}
      <div className="w-full bg-[#003BE2] pt-36 pb-20 px-4 text-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-pulse">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="h-6 w-32 bg-white/20 rounded-full" />
            <div className="h-12 w-4/5 bg-white/25 rounded-2xl" />
            <div className="h-5 w-3/5 bg-white/15 rounded-md" />
            <div className="flex items-center gap-6 mt-4">
              <div className="h-10 w-40 bg-white/20 rounded-full" />
              <div className="h-6 w-24 bg-white/20 rounded-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Sidebar Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Video Preview & Tabs Skeleton */}
          <div className="lg:col-span-8 flex flex-col gap-8 animate-pulse">
            {/* Video Player Skeleton */}
            <div className="w-full h-80 sm:h-96 md:h-[420px] bg-gray-200 rounded-3xl" />
            {/* Tabs Header */}
            <div className="flex gap-4 border-b border-gray-200 pb-4">
              <div className="h-10 w-28 bg-gray-200 rounded-xl" />
              <div className="h-10 w-28 bg-gray-100 rounded-xl" />
              <div className="h-10 w-28 bg-gray-100 rounded-xl" />
            </div>
            {/* Tab Body Paragraphs */}
            <div className="flex flex-col gap-3">
              <div className="h-4 w-full bg-gray-200 rounded-md" />
              <div className="h-4 w-5/6 bg-gray-200 rounded-md" />
              <div className="h-4 w-4/6 bg-gray-100 rounded-md" />
            </div>
          </div>

          {/* Right Column: Sticky Checkout Card Skeleton */}
          <div className="lg:col-span-4 animate-pulse">
            <div className="w-full bg-white rounded-3xl p-6 border border-gray-200/80 shadow-md flex flex-col gap-6">
              <div className="h-8 w-28 bg-gray-200 rounded-lg" />
              <div className="h-12 w-full bg-lime/50 rounded-full" />
              <div className="h-12 w-full bg-gray-100 rounded-full" />
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                <div className="h-4 w-3/4 bg-gray-200 rounded-md" />
                <div className="h-4 w-2/3 bg-gray-100 rounded-md" />
                <div className="h-4 w-4/5 bg-gray-100 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
