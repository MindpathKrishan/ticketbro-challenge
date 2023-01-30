import React, { FC } from "react";
import { IDescription } from "@/types";
import { DescriptionType } from "@/enum";

interface IDescriptionItemProps extends IDescription {}

const DescriptonItem: FC<IDescriptionItemProps> = ({ type, content }) => {
  switch (type) {
    case DescriptionType.HIGHLIGHTED:
      return (
        <div className="mt-12 mb-8 p-8 rounded-xl bg-gray-100 text-primary-700">
          <p className="italic text-base leading-[1.625rem] font-normal text-primary-700">
            {content}
          </p>
        </div>
      );

    case DescriptionType.HEADING:
      return (
        <h2 className="mt-8 mb-4 text-xl font-normal tracking-[-0.02em] font-semibold">
          {content}
        </h2>
      );

    case DescriptionType.TEXT:
    default:
      return (
        <p className="text-base leading-7 font-normal text-primary-700">
          {content}
        </p>
      );
  }
};

export default DescriptonItem;
