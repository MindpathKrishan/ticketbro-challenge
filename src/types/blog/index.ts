import { DescriptionType } from "@/enum";

export interface IHeader {
  title: string;
  image: string;
}

export interface IAuthor {
  name: string;
  image: string;
  occupation: string;
}

export interface IReleated {
  name: string;
  title: string;
  image: string;
  category: string;
  publishDate: string;
}

export interface IDescription {
  type: DescriptionType;
  content: string;
}

export interface IBlog {
  id: string;
  header: IHeader;
  author: IAuthor;
  description: IDescription[];
  releated: IReleated[];
}

export * from "./blog.request";
export * from "./blog.response";
