import React from "react";

import CardCharacters from "../../components/characters/characters";
import Nav from "../../components/navbar/navbar";

import Image from "../../images/image.png";

import { ContainerHome, Header, Section } from "./homeStyles";

function Home() {
  return (
    <ContainerHome>
      <Nav />
      <Header>
        <img src={Image} alt="image-rick-and-morty" style={{ width: 500 }} />
        <div>
          <h1>Aventure-se descobrindo</h1>
          <p>
            informações sobre todos os personagens do incrível universo maluco
            de rick and morty.
          </p>
        </div>
      </Header>
      <Section>
        <CardCharacters />
      </Section>
    </ContainerHome>
  );
}

export default Home;
