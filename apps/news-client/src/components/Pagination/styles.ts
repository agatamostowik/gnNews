import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const Pages = styled.div`
  border: 1px solid #52616b;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
`;

export const Page = styled.div<{ isActive: boolean }>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f5f9;
  cursor: pointer;

  ${(props) => {
    if (props.isActive) {
      return css`
        background-color: #c9d6df;
      `;
    }
  }};
`;
