import styled, { css } from "styled-components";

export const Container = styled.li<{ isTile: boolean }>`
  border: 1px solid #52616b;
  border-radius: 20px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  background-color: #ffffff;
  color: #1e2022;
  justify-content: space-between;
  cursor: pointer;

  ${(props) => {
    if (props.isTile) {
      return css`
        max-width: 350px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      `;
    }
  }};
`;

export const Wrapper = styled.div`
  padding: 10px;
`;

export const Headline = styled.h3<{ big?: boolean }>`
  margin: 0;
  padding: 0;
  padding: 0 0 20px 0;

  ${(props) => {
    if (props.big) {
      return css`
        font-size: 30px;
        padding: 40px 0;
      `;
    }
  }}
`;

export const P = styled.p`
  margin: 0;
  padding: 0 0 10px 0;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Button = styled.button`
  background-color: #52616b;
  border: none;
  color: #ffffff;
  border-radius: 13px;
  padding: 10px 20px;
  font-size: 12px;
  cursor: pointer;
`;
