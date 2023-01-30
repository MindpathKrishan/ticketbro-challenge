import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * API Helper
 * Responsible for anything related to API
 */
export class APIHelper {
  /**
   * Set the default config for Axios
   */
  public static init() {
    axios.defaults.baseURL = "http://localhost:3000";
  }

  /**
   * API Helper Send
   * Send request in accordance to the method defined here
   */
  public static async send<T>(
    config: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    // We can manupulate the config here, and can include JWT,
    // or some other header when needed
    return await axios<T>(config);
  }
}
