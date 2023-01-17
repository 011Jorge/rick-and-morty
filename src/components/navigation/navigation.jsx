import React from "react";
import { Content } from "./navigation";

function Navigation({ pagesNumber, setPagesNumber }) {
  console.log(pagesNumber);

  const next = () => {
    if (pagesNumber == 0) {
      setPagesNumber(2);
    } else {
      setPagesNumber((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (pagesNumber == 1 || pagesNumber == 0) return;
    setPagesNumber((prevState) => prevState - 1);
  };

  return (
    <Content>
      <button onClick={prev} type="button">
        Anterior
      </button>
      <h1>{pagesNumber}</h1>
      <button onClick={next} type="button">
        Pŕoximo
      </button>
    </Content>
  );
}

export default Navigation;
