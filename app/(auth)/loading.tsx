import React from "react";

export default function AuthLoading() {
  return (
    <div className="w-full flex flex-col justify-between h-full animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col gap-2">
        <div className="h-4 w-28 bg-blue-100 rounded-full" />
        <div className="h-9 w-3/4 max-w-xs bg-gray-200 rounded-xl mt-1" />
      </div>

      {/* Form Fields Skeleton */}
      <div className="flex flex-col gap-5 mt-8">
        {/* Field 1 */}
        <div className="flex flex-col gap-2">
          <div className="h-4 w-20 bg-gray-200 rounded-md" />
          <div className="h-12 w-full bg-gray-100 rounded-xl border border-gray-200/60" />
        </div>

        {/* Field 2 */}
        <div className="flex flex-col gap-2">
          <div className="h-4 w-16 bg-gray-200 rounded-md" />
          <div className="h-12 w-full bg-gray-100 rounded-xl border border-gray-200/60" />
        </div>

        {/* Field 3 */}
        <div className="flex flex-col gap-2">
          <div className="h-4 w-20 bg-gray-200 rounded-md" />
          <div className="h-12 w-full bg-gray-100 rounded-xl border border-gray-200/60" />
        </div>

        {/* Submit Button Skeleton */}
        <div className="flex justify-end pt-2">
          <div className="h-12 w-32 bg-gray-200 rounded-full" />
        </div>
      </div>

      {/* Footer Link Skeleton */}
      <div className="h-4 w-52 bg-gray-100 rounded-md mx-auto mt-8" />
    </div>
  );
}
