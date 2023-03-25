import styled from "styled-components";
import media from "css-in-js-media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
  justify-content: space-between;
  width: calc(100% - 90px);

  ${media(">tablet")} {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Loading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pacifico;
`;
