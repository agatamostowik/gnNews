import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import media from "css-in-js-media";

export const Container = styled.div`
  background-color: #c9d6df;
  border-radius: 20px;
  margin: 10px;
  padding: 10px;

  ${media(">tablet")} {
    min-width: 250px;
  }
`;

export const List = styled.div`
  margin: 0;

  display: flex;
  flex-direction: column;

  ${media(">tablet")} {
    align-items: flex-start;
  }
`;

export const Label = styled.span`
  display: none;

  ${media(">tablet")} {
    display: block;
    margin-left: 10px;

    color: #1e2022;

    &:hover {
      color: #52616b;
    }
  }
`;

export const Country = styled(Link)<{ isActive: boolean }>`
  display: flex;
  padding: 10px 0;
  font-size: 20px;
  padding: 15px;
  width: 100%;

  ${(props) => {
    if (props.isActive) {
      return css`
        background-color: #52616b;
        border-radius: 20px;

        ${Label} {
          color: #ffffff;
        }
      `;
    }
  }}
`;
