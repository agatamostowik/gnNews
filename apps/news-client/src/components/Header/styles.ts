import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #c9d6df;
  margin: 10px;
  flex: 1;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  border-radius: 20px;
  max-height: 65px;
  align-item: center;
`;

export const Logo = styled(Link)`
  font-family: "Pacifico";
  color: #1e2022;
  font-size: 30px;
  padding: 0 10px;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;
