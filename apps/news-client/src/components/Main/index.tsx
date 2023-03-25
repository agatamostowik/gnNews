import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import * as Styled from "./styles";

export const Main = () => {
  return (
    <Styled.Container>
      <Sidebar />
      <Outlet />
    </Styled.Container>
  );
};
