import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const Options = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  right: 0;
  border-radius: 13px;
  background-color: #f0f5f9;
  border-radius: 13px;
  border: 1px solid #52616b;
  overflow: hidden;
`;

export const SelectedOption = styled.div`
  align-items: center;
  background-color: #f0f5f9;
  border-radius: 13px;
  border: 1px solid #52616b;
  cursor: pointer;
  display: flex;
  justify-content: center;
  min-height: 40px;
  padding: 0 20px;
`;

export const Option = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #c9d6df;
  }
`;
