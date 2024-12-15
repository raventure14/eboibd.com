
import React from "react";
import { Skeleton } from "../../../skeleton";

const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg px-6 py-3 shadow-md">
      <div className="flex items-center justify-between mb-2">
        <Skeleton className="h-8 w-8" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
      <Skeleton className="h-8 w-3/12 mb-2" />
      <Skeleton className="h-8 w-3/12 mb-2" />
      {/* <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div> */}
    </div>
  );
};

export default CardSkeleton;
