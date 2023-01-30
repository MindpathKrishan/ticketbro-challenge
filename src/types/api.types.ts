import { ApiStatusCode } from "@/enum";

/** API Status, wether the api call was successful or it resulted in an error */
export type APIStatus = "success" | "error";

/** API Response basic type, every response from the api must be in this format  */
export interface IAPIResponse<T = any> {
  body: T; // Body of Type T, will generally contain requested data
  code: ApiStatusCode; // Custom Status code for API
  status: APIStatus; // API Status
  message?: string; // Error Message if Any
}
