import { MouseEvent, useState } from "react";
import { Modal } from "../Modal";
import { ModalArticle } from "../ArticleModal";
import { News } from "../../redux/RTK";
import * as Styled from "./styles";

type Props = {
  isTile: boolean;
  article: News;
};

export const Article = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const { article, isTile } = props;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setShowModal(true);
  };

  const handleCloseModal = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    setShowModal(false);
  };

  return (
    <>
      <Styled.Container onClick={handleClick} isTile={isTile}>
        <Styled.Wrapper>
          <Styled.Headline>{article.title}</Styled.Headline>
          <Styled.P>{article.source.name}</Styled.P>
          <Styled.P>
            {new Date(article.publishedAt).toLocaleDateString()}
          </Styled.P>
          {isTile && <Styled.P>{article.description}</Styled.P>}
        </Styled.Wrapper>
        {isTile && article.urlToImage && (
          <Styled.Image src={article.urlToImage} />
        )}
      </Styled.Container>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <ModalArticle article={article} />
        </Modal>
      )}
    </>
  );
};
