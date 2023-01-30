import React, { FC } from "react";
import Image from "next/image";

import { IBlog, IDescription } from "@/types";
import { Author } from ".";
import DescriptonItem from "./descrption-item";

interface IBlogProps extends IBlog {}

const Blog: FC<IBlogProps> = (props) => {
  const { header, author, description } = props;
  return (
    <div
      className="container mx-auto px-0 md:px-4 mt-32"
      style={{ maxWidth: "685px" }}
    >
      <div className="w-full h-80 md:h-96 relative">
        <Image fill src={header.image} alt={header.title} className="mx-auto" />
      </div>
      <div className="px-6 md:px-0">
        <h1 className="font-bold text-5xl mt-14 mb-10 text-primary-700 leading-[3.75rem]">
          {header.title}
        </h1>
        <Author {...author} />

        {description.map((item: IDescription, index: number) => (
          <DescriptonItem key={`${item.type}.${index}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
