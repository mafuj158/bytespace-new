import CourseCardSkeleton from "@/components/skeletons/course-card-skeleton";
import React from "react";

export default function CreatorDetailLoading() {
  return (
    <div className="w-full min-h-screen bg-[#FDFDFD] pb-24">
      {/* Creator Profile Banner Skeleton */}
      <div className="w-full bg-[#003BE2] pt-36 pb-20 px-4 text-white">
        <div className="container mx-auto flex flex-col items-center gap-6 text-center animate-pulse">
          <div className="size-28 sm:size-32 rounded-full bg-white/20 border-4 border-white/40" />
          <div className="h-8 w-48 bg-white/25 rounded-xl" />
          <div className="h-4 w-64 bg-white/15 rounded-md" />
          <div className="flex gap-8 mt-2">
            <div className="h-5 w-24 bg-white/20 rounded-md" />
            <div className="h-5 w-24 bg-white/20 rounded-md" />
          </div>
        </div>
      </div>

      {/* Creator Courses Grid Skeleton */}
      <div className="container mx-auto px-4 py-16">
        <div className="h-8 w-56 bg-gray-200 rounded-xl mb-10 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <CourseCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
