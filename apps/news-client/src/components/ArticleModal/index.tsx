import { News } from "../../redux/RTK";
import * as Styled from "./styles";

type Props = {
  article: News;
};

export const ModalArticle = (props: Props) => {
  const { article } = props;

  const handleClick = () => {
    window.location.href = article.url;
  };

  return (
    <>
      <Styled.Image src={article.urlToImage} />
      <Styled.Headline>{article.title}</Styled.Headline>
      <Styled.Wrapper>
        <div>
          <Styled.P>{article.source.name}</Styled.P>
          <Styled.P>
            {new Date(article.publishedAt).toLocaleDateString()}
          </Styled.P>
        </div>
        <Styled.Button onClick={handleClick}>Go to full article</Styled.Button>
      </Styled.Wrapper>
      <Styled.P>{article.content}</Styled.P>
    </>
  );
};
