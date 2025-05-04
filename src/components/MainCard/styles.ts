import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme["base-profile"]};
  padding: 3.2rem 4rem;
  border-radius: 10px;

  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);
`;
