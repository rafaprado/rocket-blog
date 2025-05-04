import styled from "styled-components";

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    text-transform: uppercase;

    font-size: 1.2rem;
    color: ${(props) => props.theme.blue};
    font-weight: bold;

    text-decoration: none;

    &:hover {
      transition: opacity 0.3s;
      opacity: 0.7;
    }
  }
`;

export const ArticleTitle = styled.h1`
  font-size: 2.4rem;
  color: ${(props) => props.theme["base-title"]};
  margin-bottom: 0.8rem;
`;

export const ArticleInfoList = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

export const ArticleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const ArticleContent = styled.div`
  color: ${(props) => props.theme["base-text"]};
  font-size: 1.6rem;

  padding: 4rem 3.2rem;

  p + *,
  blockquote + *,
  ol + *,
  ul + * {
    margin-top: 2.4rem;
  }

  h1 + *,
  h2 + * {
    margin-top: 2.4rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.blue};
  }

  ol,
  ul {
    margin-inline: 2rem;
  }
`;
