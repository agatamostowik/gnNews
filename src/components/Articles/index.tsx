import { ArticlesContainer } from "./styles";

export const Articles = (props: { articles: unknown[] }) => {
  const { articles } = props;

  return (
    <ArticlesContainer>
      <ul>
        <li>qwe</li> <li>qwe</li> <li>qwe</li> <li>qwe</li>
      </ul>
    </ArticlesContainer>
  );
};
