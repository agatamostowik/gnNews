import { newsApi } from "../redux/RTK";
import { useAppSelector } from "../redux/store";
import { Code } from "../types";

export const useGetCountryArticles = (country: Code) => {
  const page = useAppSelector((state) => state.app.page);
  const pageSize = useAppSelector((state) => state.app.pageSize);

  return newsApi.useGetCountryArticlesQuery({ country, page, pageSize });
};
