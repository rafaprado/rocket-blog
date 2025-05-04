import { Link, useNavigate, useParams } from "react-router-dom";
import { MainCard } from "../../components/MainCard";
import {
  ArticleContent,
  ArticleInfo,
  ArticleInfoList,
  ArticleTitle,
  Navigation,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { ArticlesContext } from "../../contexts/ArticlesContext";
import Markdown from "react-markdown";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Article() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { articles } = useContext(ArticlesContext);

  const article = articles.find((article) => article.id == +id!);

  if (!article) return <h1>Error</h1>;

  return (
    <>
      <MainCard>
        <Navigation>
          <Link to="#" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>

          <Link to="/">
            Ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </Navigation>

        <ArticleTitle>{article.title}</ArticleTitle>

        <ArticleInfoList>
          <ArticleInfo>
            <FontAwesomeIcon icon={faGithub} />
            {article.author}
          </ArticleInfo>

          <ArticleInfo>
            <FontAwesomeIcon icon={faCalendar} />
            Há{" "}
            {formatDistance(new Date(), new Date(article.createdAt), {
              locale: ptBR,
            })}
          </ArticleInfo>

          <ArticleInfo>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </ArticleInfo>
        </ArticleInfoList>
      </MainCard>

      <main>
        <ArticleContent>
          <Markdown>{article.content}</Markdown>
        </ArticleContent>
      </main>
    </>
  );
}
