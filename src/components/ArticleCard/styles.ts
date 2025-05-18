import { Link } from "react-router-dom";
import styled from "styled-components";

export const ArticleCardContainer = styled(Link)`
  text-decoration: none;
  display: block;

  padding: 3.2rem;
  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;

  &:hover {
    transition: opacity 0.3s;
    opacity: 0.7;
  }
`;

export const ArticleCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  margin-bottom: 2rem;

  h3 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 2rem;
  }

  span {
    color: ${(props) => props.theme["base-span"]};
    font-size: 1.4rem;
    line-height: 2.5;
  }
`;

export const ArticleExcerpt = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme["base-text"]};

  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis;
`;
