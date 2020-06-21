import React from "react";

import * as S from "./styled";

function Header({ menu }) {
  return (
    <S.Header>
      <nav>
        <S.MenuList>
          {menu.map(v => (
            <li
              key={Math.random()
                .toString(36)
                .substr(2, 9)}
            >
              <a href={v.link}>{v.title}</a>
            </li>
          ))}
        </S.MenuList>
      </nav>
    </S.Header>
  );
}

export default Header;
