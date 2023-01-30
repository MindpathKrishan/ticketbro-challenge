import { APIHelper, StringHelper } from "@/helpers";
import { ENDPOINT_BLOG } from "@/constants";
import { IBlogRequest, IBlogResponse } from "@/types";

/**
 * Blog Service
 *
 * Responsible for handling every action related to Blog
 * for example CRUD Operations
 */
export class BlogService {
  /**
   * Fetch a Single Blog Post
   * @param {IBlogRequest} id Id of the Blog
   * @return {IBlogResponse['body']}
   */
  public static async fetchSingle(id: IBlogRequest): Promise<IBlogResponse> {
    const response = await APIHelper.send<IBlogResponse>({
      url: StringHelper.replace(ENDPOINT_BLOG, id),
    });

    return response.data;
  }
}
