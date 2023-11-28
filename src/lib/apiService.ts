const apiUrl = process.env.NEXT_PUBLIC_URL_API;

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface ApiConfig {
  method?: HttpMethod;
  body?: Record<string, any>;
  headers?: Record<string, string>;
  tag?: string;
  [key: string]: any;
}

class ApiService {
  private async fetchApi<T>(
    endpoint: string,
    { method = "GET", body, headers, ...customConfig }: ApiConfig = {}
  ): Promise<T> {
    const requestHeaders = {
      "Content-Type": "application/json",
      ...headers,
    };

    const config: RequestInit = {
      method,
      headers: requestHeaders,
      ...customConfig,
      cache: "no-store",
    };

    if (method !== "GET") {
      config.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(`${apiUrl}/${endpoint}`, config);

      if (!response.ok) {
        throw new Error(
          `Error en la solicitud: ${response.status} - ${response.statusText}`
        );
      }

      const responseData: T = await response.json();

      return responseData;
    } catch (error: any) {
      throw new Error(`Error de red: ${error.message}`);
    }
  }

  get<T>(endpoint: string, customConfig?: ApiConfig): Promise<T> {
    return this.fetchApi<T>(endpoint, { ...customConfig, method: "GET" });
  }

  post<T>(
    endpoint: string,
    body?: Record<string, any>,
    customConfig?: ApiConfig
  ): Promise<T> {
    return this.fetchApi<T>(endpoint, {
      ...customConfig,
      method: "POST",
      body,
    });
  }

  put<T>(
    endpoint: string,
    body?: Record<string, any>,
    customConfig?: ApiConfig
  ): Promise<T> {
    return this.fetchApi<T>(endpoint, { ...customConfig, method: "PUT", body });
  }

  delete<T>(endpoint: string, customConfig?: ApiConfig): Promise<T> {
    return this.fetchApi<T>(endpoint, { ...customConfig, method: "DELETE" });
  }
}

export default new ApiService();
