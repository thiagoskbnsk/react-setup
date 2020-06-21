import React from "react";

import * as S from "./styled";

function PageHeader({ title }) {
  return (
    <div>
      <S.Title>{title}</S.Title>
    </div>
  );
}

export default PageHeader;
