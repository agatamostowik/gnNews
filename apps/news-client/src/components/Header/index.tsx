import { MoreInfo } from "../MoreInfo";
import { DisplayMode } from "../DisplayMode";
import { SwitchLanguage } from "../SwitchLanguage";
import * as Styled from "./styles";

export const Header = () => {
  return (
    <Styled.Container>
      <Styled.Logo to="/">News</Styled.Logo>
      <Styled.ActionButtons>
        <DisplayMode />
        <SwitchLanguage />
        <MoreInfo />
      </Styled.ActionButtons>
    </Styled.Container>
  );
};
