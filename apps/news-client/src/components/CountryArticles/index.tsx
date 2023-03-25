import { Navigate, useParams } from "react-router-dom";
import { useGetCountryArticles } from "../../hooks";
import { Articles } from "../Articles";
import { PageSizeSelect } from "../PageSizeSelect";
import { Pagination } from "../Pagination";
import { Code } from "../../types";
import * as Styled from "./styles";

export const CountryArticles = () => {
  const { countryCode } = useParams<{ countryCode: Code }>();

  if (!countryCode) {
    return <Navigate to={`/`} replace />;
  }

  const { isSuccess, data: articles } = useGetCountryArticles(countryCode);

  if (!isSuccess) {
    return <Styled.Loading>Loading</Styled.Loading>;
  }

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <PageSizeSelect />
        <Articles articles={articles.data} />
      </Styled.Wrapper>
      <Pagination totalResults={articles.totalResults} />
    </Styled.Container>
  );
};
