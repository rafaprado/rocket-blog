import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../libs/axios";

interface ArticleProps {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

interface ArticlesContextType {
  articles: ArticleProps[];
  fetchArticles: (query?: string) => Promise<void>;
}

interface ArticlesContextProviderProps {
  children: ReactNode;
}

export const ArticlesContext = createContext({} as ArticlesContextType);

export function ArticlesProvider({ children }: ArticlesContextProviderProps) {
  const [articles, setArticles] = useState<ArticleProps[]>([]);

  const fetchArticles = useCallback(async (query?: string) => {
    const response = await api.get("/articles", {
      params: {
        q: query,
      },
    });

    setArticles(response.data);
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <ArticlesContext.Provider value={{ articles, fetchArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
}
