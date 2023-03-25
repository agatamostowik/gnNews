import styled from "styled-components";

export const Wrapper = styled.div`
  display; flex;
`;

export const Headline = styled.h3<{ big?: boolean }>`
  margin: 0;
  padding: 0;
  font-size: 30px;
  padding: 20px 0 0;
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
  margin-bottom: 50px;
`;
