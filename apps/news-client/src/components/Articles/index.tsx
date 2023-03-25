import { News } from "../../redux/RTK";
import { useAppSelector } from "../../redux/store";
import { Article } from "../Article";
import * as Styled from "./styles";

type Props = {
  articles: News[];
};

export const Articles = (props: Props) => {
  const { articles } = props;
  const displayMode = useAppSelector((state) => state.app.displayMode);
  const isTile = displayMode === "tile";

  return (
    <Styled.Container isTile={isTile}>
      {articles.map((article, index) => (
        <Article key={index} article={article} isTile={isTile} />
      ))}
    </Styled.Container>
  );
};
