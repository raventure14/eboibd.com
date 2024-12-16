import { SkeletonProps } from '@/types';
import React from 'react';


export function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-md ${className}`} />
  );
}