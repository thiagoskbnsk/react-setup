import styled from "styled-components";

export const Header = styled.header`
  height: 80px;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 15px;
`;

export const MenuList = styled.ul`
  margin: 0;
  display: flex;
  padding: 0;
  list-style: none;
  align-items: center;

  li {
    padding: 0 15px;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    font-size: bold;
    font-family: sans-serif;
    color: #666;

    &:hover {
      text-decoration: underline;
      color: #111;
    }
  }
`;
