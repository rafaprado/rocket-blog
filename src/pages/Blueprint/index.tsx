import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { BluePrintContainer } from "./styles";

export function BluePrint() {
  return (
    <>
      <Header />

      <BluePrintContainer>
        <Outlet />
      </BluePrintContainer>
    </>
  );
}
