import React from "react";
import Image, { ImageProps } from "next/image";

type ChevronDownProps = Omit<Omit<ImageProps, "alt">, "src">;

const ChevronDown = (props: ChevronDownProps) => (
  <Image
    src="/chevron-down.svg"
    alt="chevron-down"
    width={16}
    height={16}
    {...props}
  />
);

export default ChevronDown;
