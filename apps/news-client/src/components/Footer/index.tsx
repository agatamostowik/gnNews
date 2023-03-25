import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCountryArticles } from "../../hooks";
import { useAppSelector } from "../../redux/store";
import { useTranslation } from "../Translate";
import * as Styled from "./styles";

export const Footer = () => {
  const [date, setDate] = useState(new Date());
  const { countryCode } = useParams<{ countryCode: Code }>();
  const lang = useAppSelector((state) => state.app.lang);
  const { data: articles } = useGetCountryArticles(countryCode);
  const translation = useTranslation(lang);

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <Styled.Container>
      <Styled.Time>
        Current time: <b>{date.toLocaleTimeString()}</b>
      </Styled.Time>
      {articles && (
        <Styled.Articles>
          {translation("visibleArticles")}: <b>{articles.data.length}</b>
        </Styled.Articles>
      )}
    </Styled.Container>
  );
};
