import styled from "styled-components";
import headerCover from "../../assets/header-cover.svg";

export const HeaderContainer = styled.header`
  position: relative;
  z-index: -1;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 29.6rem;
  width: 100%;

  background: ${(props) => props.theme["base-profile"]};
  background-image: url(${headerCover});
  background-repeat: no-repeat;
  background-size: cover;

  img {
    position: absolute;
    top: 6.4rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;
