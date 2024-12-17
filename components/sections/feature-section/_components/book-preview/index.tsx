"use client";

import Image from "next/image";

type Props = {
    src:string;
    alt:string
}
export function BookPreview({src, alt}:Props) {
  return (
    <div className="relative w-full max-w-md rounded-md">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={800}
        className="object-contain w-full h-auto rounded-md"
        priority
      />
    </div>
  );
}