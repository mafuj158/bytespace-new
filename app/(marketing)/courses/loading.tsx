import CourseCardSkeleton from "@/components/skeletons/course-card-skeleton";
import React from "react";

export default function CoursesLoading() {
  return (
    <div className="w-full min-h-screen bg-[#FDFDFD] pb-24">
      {/* Search & Hero Banner Skeleton */}
      <div className="w-full bg-[#003BE2] pt-36 pb-20 px-4">
        <div className="container mx-auto flex flex-col items-center gap-6 text-center max-w-2xl animate-pulse">
          <div className="h-12 w-3/4 bg-white/25 rounded-2xl" />
          <div className="h-4 w-4/5 bg-white/15 rounded-md" />
          <div className="h-14 w-full bg-white/20 rounded-full mt-4" />
        </div>
      </div>

      {/* Category Pills Skeleton */}
      <div className="container mx-auto px-4 pt-12">
        <div className="flex items-center gap-3 overflow-x-auto pb-4 animate-pulse">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-11 w-32 bg-gray-200/80 rounded-full shrink-0" />
          ))}
        </div>

        {/* Results Counter Skeleton */}
        <div className="h-5 w-48 bg-gray-200 rounded-md my-8 animate-pulse" />

        {/* Course Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <CourseCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
