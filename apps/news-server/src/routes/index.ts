import { Router, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { validateCountryParamsMiddleware } from "../middlewares";

dotenv.config();

export const rootRouter = Router();

type Article = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
};

type RawResponse = {
  status: "ok" | "error";
  totalResults: number;
  articles: Article[];
};

type GetArticlesResponse = {
  page: number;
  pageSize: number;
  totalResults: number;
  data: Article[];
};

rootRouter.get(
  "/api/articles/country/:countryCode",
  validateCountryParamsMiddleware,
  async (req: Request, res: Response<GetArticlesResponse>) => {
    const page = req.query.page as unknown as string;
    const pageSize = req.query.pageSize as unknown as string;
    const country = req.params.countryCode;

    try {
      const queryParams = new URLSearchParams({
        country: country,
        page: page,
        pageSize: pageSize,
        apiKey: process.env.NEWS_KEY,
      });

      const rawResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?${queryParams.toString()}`
      );

      const { totalResults, articles } =
        (await rawResponse.json()) as RawResponse;

      res.json({
        page: parseInt(page),
        pageSize: parseInt(pageSize),
        totalResults: totalResults,
        data: articles,
      });
    } catch (e) {
      console.log(e);
    }
  }
);
