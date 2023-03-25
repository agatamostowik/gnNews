import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Code, Language } from "../types";

export type News = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
};

type GetArticlesResponse = {
  page: number;
  pageSize: number;
  totalResults: number;
  data: News[];
};

type GetCountryArticlesPayload = {
  country: Code;
  page: number;
  pageSize: number;
};

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  tagTypes: ["News"],
  endpoints: (builder) => ({
    getCountryArticles: builder.query<
      GetArticlesResponse,
      GetCountryArticlesPayload
    >({
      query: ({ country, page, pageSize }) => {
        return `api/articles/country/${country}?pageSize=${pageSize}&page=${page}`;
      },
      // Pagination: https://redux-toolkit.js.org/rtk-query/usage/pagination
      providesTags: (result) => {
        return result
          ? [
              ...result.data.map((news) => {
                return { type: "News" as const, id: news.url };
              }),
              { type: "News", id: "PARTIAL-LIST" },
            ]
          : [{ type: "News", id: "PARTIAL-LIST" }];
      },
    }),
  }),
});
