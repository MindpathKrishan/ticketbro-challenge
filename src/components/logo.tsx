import React, { FC } from "react";
import Image, { ImageProps } from "next/image";

type LogoProps = Omit<Omit<ImageProps, "alt">, "src">;

/**
 * Logo component for the App
 * @param {LogoProps} props
 * @return {FC<LogoProps>}
 */
const Logo: FC<LogoProps> = (props) => (
  <Image
    src="/logo.svg"
    alt="logo-image"
    width={134.18}
    height={23.62}
    {...props}
  />
);

export default Logo;
