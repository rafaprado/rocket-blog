import { Link } from "react-router-dom";
import { MainCard } from "../../components/MainCard";
import {
  ArticlesHeader,
  AticlesGrid,
  AuthorContainer,
  AuthorInfo,
  AuthorInfoSummary,
  AuthorInfoSummaryItem,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SearchForm } from "./components/SearchForm";
import { ArticleCard } from "../../components/ArticleCard";
import { ArticlesContext } from "../../contexts/ArticlesContext";
import { useContextSelector } from "use-context-selector";

export function Home() {
  const { articles, isLoading } = useContextSelector(
    ArticlesContext,
    (context) => {
      return {
        articles: context.articles,
        isLoading: context.isLoading,
      };
    }
  );

  return (
    <>
      <MainCard>
        <AuthorContainer>
          <img
            src="https://avatars.githubusercontent.com/u/51882629?v=4"
            alt=""
          />

          <AuthorInfo>
            <header>
              <h1>Rafael Prado</h1>
              <Link to={"https://github.com/rafaprado"}>
                <span>Github</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            </header>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>

            <footer>
              <AuthorInfoSummary>
                <AuthorInfoSummaryItem>
                  <FontAwesomeIcon icon={faGithub} />
                  <span>cameronwll</span>
                </AuthorInfoSummaryItem>

                <AuthorInfoSummaryItem>
                  <FontAwesomeIcon icon={faBuilding} />
                  <span>Rocketseat</span>
                </AuthorInfoSummaryItem>

                <AuthorInfoSummaryItem>
                  <FontAwesomeIcon icon={faUserGroup} />
                  <span>32 seguidores</span>
                </AuthorInfoSummaryItem>
              </AuthorInfoSummary>
            </footer>
          </AuthorInfo>
        </AuthorContainer>
      </MainCard>

      <main>
        <ArticlesHeader>
          <h2>Publicações</h2>
          <span>
            {!isLoading || !articles ? String("").padStart(2, "0") : "00"}{" "}
            Publicações
          </span>
        </ArticlesHeader>

        <SearchForm />

        {!isLoading || !articles ? (
          <AticlesGrid>
            {articles !== null &&
              articles.items.map((article) => (
                <ArticleCard
                  key={article.id}
                  id={article.id}
                  content={article.body}
                  title={article.title}
                  createdAt={new Date(article["created_at"])}
                />
              ))}
          </AticlesGrid>
        ) : (
          <h2>Carregando...</h2>
        )}
      </main>
    </>
  );
}
