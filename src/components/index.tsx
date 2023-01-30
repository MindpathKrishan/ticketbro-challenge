import dynamic from "next/dynamic";

export const Logo = dynamic(import("./logo"));
export const AppBar = dynamic(import("./app-bar/app-bar"));
export const Author = dynamic(import("./author/author"));
export const RelatedArticles = dynamic(import("./related-articles/related"));
export const RelatedItem = dynamic(import("./related-articles/related-item"));
export const Blog = dynamic(import("./blog"));
export const BannerCta = dynamic(import("./banner-cta/banner-cta"));
export const Footer = dynamic(import("./footer/footer"));
