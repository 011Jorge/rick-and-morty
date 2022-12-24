import React from "react";

import api from "../../../services/api";

import { ContainerCharacter, Button } from "./charactersStyles";

function CardCharacters() {
  async function handleCharacters() {
    try {
      const response = await api.get("/character");
      console.log(response.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ContainerCharacter>
      <Button onClick={handleCharacters}>Testing</Button>
    </ContainerCharacter>
  );
}

export default CardCharacters;
