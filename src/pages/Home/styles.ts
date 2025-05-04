import styled from "styled-components";

export const AuthorContainer = styled.article`
  display: flex;
  gap: 3.2rem;

  img {
    width: 148px;
    height: 148px;
    object-fit: cover;

    border-radius: 8px;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 0.5rem;

    h1 {
      color: ${(props) => props.theme["base-title"]};
      font-size: 2.4rem;
      line-height: 1.3;
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.4rem;

      text-decoration: none;
      color: ${(props) => props.theme.blue};
      font-size: 1.2rem;
      font-weight: bold;

      text-transform: uppercase;

      &:hover {
        opacity: 0.7;
        transition: opacity 0.3s;
      }
    }

    p {
      font-size: 1.6rem;
    }
  }

  footer {
    margin-top: auto;
  }
`;

export const AuthorInfoSummary = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  list-style: none;
`;

export const AuthorInfoSummaryItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    line-height: 1;
  }
`;

export const ArticlesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 7.2rem;

  margin-bottom: 1.2rem;

  h2 {
    font-size: 1.8rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    color: ${(props) => props.theme["base-span"]};
    font-size: 1.4rem;
  }
`;

export const AticlesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;

  margin-top: 4.8rem;
`;
