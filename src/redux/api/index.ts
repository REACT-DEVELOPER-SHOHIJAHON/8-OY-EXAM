import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'


const baseQuery = async (args: any, api: any, extraOptions: any) => {

  const rawBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token")
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const { status } = result.error;
    if (status === 401 || status === 403) {

    }
  }
  return result;
};
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 })

export const api = createApi({
  reducerPath: 'myApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['PRODUCTS','BRANDS','CATEGORIES'],
  endpoints: () => ({}),
})