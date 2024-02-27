type FetcherResponse<T> = { data: T };

export const fetcher = async <T>(url: string): Promise<FetcherResponse<T>> => {
  const response = await fetch(url);
  return { data: await response.json() };
};