import type { NextApiRequest, NextApiResponse } from "next";

import { IAPIResponse } from "@/types";
import { ApiStatusCode } from "@/enum";

// Statically Importing blogs as dummy data
import blog from "@/assets/json/blog1.json";

// Generate the blog type from the recieved JSON
type BlogData = typeof blog;

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<IAPIResponse<BlogData>>
) {
  res.status(200).json({
    status: "success",
    body: blog,
    code: ApiStatusCode.SUCCESS,
  });
}
