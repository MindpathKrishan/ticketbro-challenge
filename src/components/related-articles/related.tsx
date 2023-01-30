import React, { FC } from "react";

import { IReleated } from "@/types";
import RelatedArticleItem from "./related-item";

interface IRelatedArticlesProps {
  related: IReleated[];
}

/**
 * Related Articles
 * @param {IRelatedArticlesProps} props Related Articles Array
 * @returns {FC<IRelatedArticlesProps>}
 */
const RelatedArticles: FC<IRelatedArticlesProps> = ({ related }) => {
  // If length is zero, do not render the component
  if (related.length === 0) {
    return null;
  }

  return (
    <div className="text-center mt-20">
      {/* Related Articles Header */}
      <h2 className="text-4xl font-bold text-primary-700">Related Articles</h2>
      <h6 className="mt-4 text-[#64748B]">
        You might be interested in these articles. Don’t miss them!
      </h6>
      <div className="flex flex-col md:flex-row justify-center items-baseline mt-14">
        {/* Related Article Item */}
        {related.map((article: IReleated) => (
          <RelatedArticleItem key={article.title} related={article} />
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
