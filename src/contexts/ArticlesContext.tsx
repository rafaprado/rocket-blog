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
  isLoading: boolean;
}

interface ArticlesContextProviderProps {
  children: ReactNode;
}

export const ArticlesContext = createContext({} as ArticlesContextType);

export function ArticlesProvider({ children }: ArticlesContextProviderProps) {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchArticles = useCallback(async (query?: string) => {
    setIsLoading(true);

    try {
      const response = await api.get("/articles", {
        params: {
          q: query,
        },
      });

      setArticles(response.data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <ArticlesContext.Provider value={{ articles, isLoading, fetchArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
}
