import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

export const Body = styled.div`
  padding: 30px;
  min-height: calc(100vh - 220px);
`;
