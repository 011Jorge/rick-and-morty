import React, { useEffect, useState } from "react";

import {
  H1,
  ContainerCharacter,
  Card,
  InfoCharacters,
} from "./charactersStyles.js";

function CardCharacters() {
  const [character, setCharacter] = useState([]);

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

  return (
    <>
      <H1>Characters</H1>
      <ContainerCharacter>
        {character?.map((item) => {
          return (
            <Card key={item.id}>
              <img src={item.image} alt={item.name} />
              <InfoCharacters>
                <h2>{item.name}</h2>
                <div>
                  <h4>
                    {item.status === "Alive" ? (
                      <>
                        <span className="alive"></span>
                        {item.status} - {item.species}
                      </>
                    ) : (
                      <>
                        <span className="dead"></span>
                        {item.status} - {item.species}
                      </>
                    )}
                  </h4>
                </div>
                <p>Last known location:</p>
                <h4>{item.location.name}</h4>
                <p>Origin:</p>
                <h4>{item.origin.name}</h4>
              </InfoCharacters>
            </Card>
          );
        })}
      </ContainerCharacter>
    </>
  );
}

export default CardCharacters;