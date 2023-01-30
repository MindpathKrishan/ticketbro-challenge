import React, { FC } from "react";
import Image from "next/image";

import { IReleated } from "@/types";

interface IRelatedArticleProps {
  related: IReleated;
}

/**
 * Related Article Item
 * @param {IRelatedArticleProps} param
 * @returns {FC<IRelatedArticleProps>}
 */
const RelatedArticleItem: FC<IRelatedArticleProps> = ({ related }) => (
  <div className="flex mx-4 flex-col justify-start w-80 text-left mb-7 md:mb-0">
    {/* Related Item Main Image */}
    <Image src={related.image} alt="Header-Image" width={320} height={320} />
    {/* Category Display */}
    <div className="px-2 py-1 rounded-lg font-medium leading-4.5 w-fit text-[0.6875rem] mt-5 bg-gray-100 text-primary-700 uppercase tracking-[0.063em]">
      {related.category}
    </div>
    <h3 className="mt-4 text-2xl font-medium text-primary-700">
      {related.title}
    </h3>
    <div className="mt-4 flex flex-row text-[13px] text-primary-500">
      {/* About Author */}
      <p className="mr-1"> {related.name} </p>
      &#x2022;
      {/* Publish Date, printing directly cocidering date is formatted from backend */}
      <p className="ml-1"> {related.publishDate} </p>
    </div>
  </div>
);

export default RelatedArticleItem;
