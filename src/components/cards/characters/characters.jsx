import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

import api from "../../../services/api";

import { ContainerCharacter, ButtonTest } from "./charactersStyles";

function CardCharacters() {
  const [character, setCharacter] = useState([]);

  async function handleCharacters() {
    try {
      const { data: consumed } = await api.get("/character");

      setCharacter([
        {
          image: consumed.results[0].image,
          name: consumed.results[0].name,
          species: consumed.results[0].species,
          location: consumed.results[0].location.name,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ContainerCharacter>
      <ButtonTest onClick={handleCharacters}>Testing</ButtonTest>

      <ul>
        {character.map((item) => {
          return (
            <Card key={item.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.species}</Card.Text>
                <Card.Text>{item.location}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
      </ul>
    </ContainerCharacter>
  );
}

export default CardCharacters;
