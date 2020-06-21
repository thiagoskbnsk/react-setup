import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import * as S from "./styled";

function Template(props) {
  return (
    <>
      <S.GlobalStyle />
      <Header
        menu={[
          { title: "Home", link: "/" },
          { title: "To-do", link: "/todo" }
        ]}
      />
      <S.Body>{props.children}</S.Body>
      <Footer />
    </>
  );
}

export default Template;
