import * as React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface Props {
  numItems?: number;
}

export function SkeletonList(props: Props) {
  /**
   * Render
   */
  return (
    <div className="flex flex-col w-full gap-3">
      {Array(props.numItems ?? 12)
        .fill(null)
        .map((_v, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
    </div>
  );
}
