import styled, { css } from "styled-components";

export const Container = styled.ul<{ isTile: boolean }>`
  margin: 0;
  gap: 20px;
  display: flex;
  flex-direction: column;

  ${(props) => {
    if (props.isTile) {
      return css`
        row-gap: 20px;
        flex-direction: row;
        flex-wrap: wrap;
      `;
    }
  }}
`;
