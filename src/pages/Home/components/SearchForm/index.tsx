import { SearchBar, SearchFormContainer } from "./styles";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";
import { ArticlesContext } from "../../../../contexts/ArticlesContext";

export function SearchForm() {
  const [searchValue, setSearchValue] = useState("");
  const { fetchArticles } = useContext(ArticlesContext);

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
