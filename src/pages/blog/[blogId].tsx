import React, { FC } from "react";
import { GetStaticPropsResult } from "next";

import { IBlog } from "@/types";
import { AppBar, BannerCta, Blog, Footer, RelatedArticles } from "@/components";
import blog from "@/assets/json/blog1.json";

interface ISingleBlogProps {
  blog: IBlog;
  loading?: boolean;
}

export const SingleBlog: FC<ISingleBlogProps> = (props) => {
  const { blog, loading } = props;

  if (loading) {
    return <div> Loading </div>;
  }

  return (
    <>
      <AppBar />
      <Blog {...blog} />
      <RelatedArticles related={blog.releated} />
      <BannerCta />
      <Footer />
    </>
  );
};

export const getStaticPaths = () => {
  return {
    paths: [{ params: { blogId: "1" } }],
    fallback: true,
  };
};

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<ISingleBlogProps>
> => {
  // Used as IA, casuse the page cant load without the blogId
  // const { blogId } = props?.params as IA;

  // We can dynamically fetch from api as well but for this project we are
  // getting the data statically.

  return {
    props: {
      // Data is of type IBlog
      blog: blog as IBlog,
      loading: false,
    },
  };
};

SingleBlog.defaultProps = {
  loading: true,
};

export default SingleBlog;
