"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";

interface ProductCardImageProps {
  src: string | StaticImport;
  alt: string;
}

export default function ProductCardImage({ src, alt }: ProductCardImageProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="mb-4">
      {imgError ? (
        <div className="w-full aspect-square bg-gray-200 rounded text-gray-400 uppercase text-center flex items-center justify-center font-[family-name:var(--font-roboto)]">
          No image
        </div>
      ) : (
        <div className="border border-gray-100 bg-white rounded p-2">
          <Image
            src={src}
            alt={alt}
            width={500}
            height={500}
            onError={() => setImgError(true)}
            className="object-cover rounded aspect-square m-auto"
          />
        </div>
      )}
    </div>
  );
}
