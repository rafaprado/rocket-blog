import { ReactNode, useEffect, useState } from "react";
import { api } from "../libs/axios";
import { createContext } from "use-context-selector";

interface ArticlesContextType {
  articles: any;
  fetchArticles: (query?: string) => Promise<void>;
  isLoading: boolean;
}

interface ArticlesContextProviderProps {
  children: ReactNode;
}

export const ArticlesContext = createContext({} as ArticlesContextType);

export function ArticlesProvider({ children }: ArticlesContextProviderProps) {
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchArticles = async (query?: string) => {
    setIsLoading(true);

    try {
      const response = await api.get("/issues", {
        params: {
          q: `${query ?? ""} repo:rafaprado/rocket-blog`,
        },
      });

      setArticles(response.data);
      setIsLoading(false);
    } catch {
      throw new Error("Error when fetching");
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [articles]);

  return (
    <ArticlesContext.Provider value={{ articles, isLoading, fetchArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
}
