import styled from "styled-components";

export const SearchFormContainer = styled.form``;

export const SearchBar = styled.input`
  padding: 1.2rem 1.6rem;
  background: ${(props) => props.theme["base-input"]};

  border: 1px solid ${(props) => props.theme["base-border"]};
  border-radius: 6px;

  color: ${(props) => props.theme["base-label"]};

  font-size: 1.6rem;
  width: 100%;
`;
