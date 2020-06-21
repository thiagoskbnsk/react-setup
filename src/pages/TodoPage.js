import React from "react";

import Template from "../containers/Template";
import Button from '../components/Button';

function ExamplePage() {
  return (
    <Template>
      <form>
        <input type="text" />
        <Button title="Adicionar" action={() => {}} variant="primary" />
        <ul>
          <li>
            <input type="checkbox" /> item 1 <Button title="excluir" action={() =>{}} variant="danger" sm />
          </li>
        </ul>
      </form>
    </Template>
  );
}

export default ExamplePage;
