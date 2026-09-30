import React from "react";

export const CourseCardSkeleton = () => {
  return (
    <div className="w-full p-4 flex flex-col gap-4 bg-white border border-[#CED0D3]/60 rounded-3xl animate-pulse shadow-xs">
      {/* Thumbnail Skeleton */}
      <div className="w-full h-52 rounded-2xl bg-gray-200 relative overflow-hidden flex items-end p-3">
        <div className="flex justify-between w-full gap-2">
          <div className="h-6 w-20 bg-white/60 rounded-full" />
          <div className="h-6 w-24 bg-white/60 rounded-full" />
          <div className="h-6 w-20 bg-white/60 rounded-full" />
        </div>
      </div>

      {/* Title & Rating Skeleton */}
      <div className="flex items-start justify-between gap-3 pt-1">
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-5 w-4/5 bg-gray-200 rounded-md" />
          <div className="h-3 w-28 bg-gray-100 rounded-md" />
        </div>
        <div className="h-4 w-10 bg-gray-200 rounded-md shrink-0" />
      </div>

      {/* Level & Avatars Skeleton */}
      <div className="flex items-center justify-between gap-2 pt-1">
        <div className="h-7 w-24 bg-gray-100 rounded-full" />
        <div className="flex items-center -space-x-2">
          <div className="size-7 rounded-full bg-gray-200 border-2 border-white" />
          <div className="size-7 rounded-full bg-gray-200 border-2 border-white" />
          <div className="size-7 rounded-full bg-gray-200 border-2 border-white" />
          <div className="size-7 rounded-full bg-gray-300 border-2 border-white" />
        </div>
      </div>

      {/* Price Skeleton */}
      <div className="pt-2">
        <div className="h-7 w-20 bg-gray-200 rounded-md" />
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
