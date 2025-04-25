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
    <>
      {imgError ? (
        <div className="w-full m-auto aspect-square bg-gray-200 rounded text-gray-400 uppercase text-center flex items-center justify-center font-[family-name:var(--font-roboto)]">
          Sem Imagem
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300}
          onError={() => setImgError(true)}
          className="aspect-square w-full m-auto"
        />
      )}
    </>
  );
}
