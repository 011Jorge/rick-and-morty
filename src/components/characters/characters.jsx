import React, { useEffect, useState } from "react";
import Navigation from "../navigation/navigation.jsx";

import {
  H1,
  ContainerCharacter,
  Card,
  InfoCharacters,
} from "./charactersStyles.js";

function CardCharacters() {
  const [character, setCharacter] = useState([]);
  const [pages, setPages] = useState("");
  const [info, setInfo] = useState("");

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
    const my_info = await my_user.info;
    const my_pages = await my_info.pages;
    const my_results = await my_user.results;

    setInfo(my_info);
    setPages(my_pages);
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
      <Navigation pages={pages} setPages={setPages} />
    </>
  );
}

export default CardCharacters;
