import styled from "styled-components";
import media from "css-in-js-media";

export const Container = styled.footer`
  background-color: #52616b;
  display: flex;
  flex: 1;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  justify-content: space-between;
  max-height: 70px;
`;

export const Time = styled.div`
  color: #ffffff;

  ${media(">tablet")} {
    font-size: 20px;
  }
`;

export const Articles = styled.div`
  color: #ffffff;

  ${media(">tablet")} {
    font-size: 20px;
  }
`;
