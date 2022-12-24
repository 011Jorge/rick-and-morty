import React from "react";
import CardCharacters from "../../components/cards/characters/characters";

import Nav from "../../components/navbar/navbar";

import { ContainerHome, Section } from "./homeStyles";

function Home() {
  return (
    <ContainerHome>
      <Nav />
      <Section>
        <CardCharacters />
      </Section>
    </ContainerHome>
  );
}

export default Home;
