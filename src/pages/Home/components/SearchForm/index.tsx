import { SearchBar, SearchFormContainer } from "./styles";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";
import { ArticlesContext } from "../../../../contexts/ArticlesContext";
import { useContextSelector } from "use-context-selector";

export function SearchForm() {
  const [searchValue, setSearchValue] = useState("");
  const fetchArticles = useContextSelector(ArticlesContext, (context) => {
    return context.fetchArticles;
  });

  const debouncedSearch = useDebounce(searchValue, 500);

  function onChangeSearchInput(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    fetchArticles(debouncedSearch);
  }, [debouncedSearch, fetchArticles]);

  return (
    <SearchFormContainer>
      <SearchBar
        placeholder="Buscar Conteúdo"
        type="text"
        onChange={onChangeSearchInput}
        value={searchValue}
      />
    </SearchFormContainer>
  );
}
