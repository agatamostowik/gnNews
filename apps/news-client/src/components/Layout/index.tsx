import { Main } from "../Main";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { GlobalStyle } from "../../GlobalStyle";

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
};
