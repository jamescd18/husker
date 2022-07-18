import { HTMLAttributes } from "react";
import Image from "next/image";

interface MarkdocImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export const MarkdocImage = ({
  src,
  alt,
  height,
  width,
}: MarkdocImageProps) => {
  if (height && width) {
    return (
      <div className="flex justify-center mobile-full-bleed">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="md:rounded bg-gray-lightest"
        ></Image>
      </div>
    );
  }

  return (
    <div className="flex justify-center mobile-full-bleed">
      <img src={src} alt={alt} />
    </div>
  );
};