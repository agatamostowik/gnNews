import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { MainContainer } from "./styles";

export const Main = () => {
  return (
    <MainContainer>
      <Sidebar />
      <Outlet />
    </MainContainer>
  );
};
