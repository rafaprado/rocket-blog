import {
  ArticleCardContainer,
  ArticleCardHeader,
  ArticleExcerpt,
} from "./styles";

interface Article {
  id: number;
  title: string;
  createdAt: Date;
  content: string;
}

export function ArticleCard(article: Article) {
  const { id, title, content, createdAt } = article;

  return (
    <ArticleCardContainer to={`/articles/${id}`}>
      <ArticleCardHeader>
        <h3>{title}</h3>
        <span>{new Intl.DateTimeFormat("pt-BR").format(createdAt)}</span>
      </ArticleCardHeader>

      <ArticleExcerpt>{content}</ArticleExcerpt>
    </ArticleCardContainer>
  );
}
