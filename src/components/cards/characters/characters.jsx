import React, { useEffect, useState } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import { Card } from "react-bootstrap";
// import api from "../../../services/api";

import { ContainerCharacter } from "./charactersStyles";

function CardCharacters() {
  const [character, setCharacter] = useState("");

  useEffect(() => {
    handleCharacters();
  }, []);

  const handleCharacters = async () => {
    const api_response = await fetch(
      "https://rickandmortyapi.com/api/character",
      {
        method: "GET",
      }
    );
    const my_user = await api_response.json();
    const my_results = await my_user.results;

    console.log(my_results);
    setCharacter(my_results);
  };

  // useEffect(() => {
  //   async function handleCharacters() {
  //     try {
  //       const { data: consumed } = await api.get("/character");
  //       setCharacter([
  //         {
  //           image: consumed.results[0].image,
  //           name: consumed.results[0].name,
  //           status: consumed.results[0].status,
  //           species: consumed.results[0].species,
  //           location: consumed.results[0].location.name,
  //           origin: consumed.results[0].origin.name,
  //         },
  //       ]);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   handleCharacters();
  // }, []);

  return (
    <ContainerCharacter>
      <h1>Characters</h1>
      <ul>
        {character.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {/* <ul>
        {character.map((item) => {
          return (
            <Card className="cardCharacters" key={item.id}>
              <Card.Img className="imageCardCharacters" src={item.image} />
              <Card.Body>
                <Card.Title className="nameCardCharacters">
                  {item.name}
                </Card.Title>
                <div className="infoLiveCardCharacters">
                  <Card.Text className="textCardCharacters">
                    {item.status}
                  </Card.Text>
                  -
                  <Card.Text className="textCardCharacters">
                    {item.species}
                  </Card.Text>
                </div>
                <div className="infoLocation">
                  <p className="labelInfo">Last known location:</p>
                  <Card.Text className="textCardCharacters">
                    {item.location}
                  </Card.Text>
                </div>
                <div>
                  <p className="labelInfo">Origem</p>
                  <Card.Text className="textCardCharacters">
                    {item.origin}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </ul> */}
    </ContainerCharacter>
  );
}

export default CardCharacters;
