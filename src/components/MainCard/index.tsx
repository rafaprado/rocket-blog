import { HTMLProps } from "react";
import { HeaderContainer } from "./styles";

export function MainCard({ children }: HTMLProps<HTMLDivElement>) {
  return <HeaderContainer>{children}</HeaderContainer>;
}
