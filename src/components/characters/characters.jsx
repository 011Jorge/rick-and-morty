import React, { useEffect, useState } from "react";

import {
  H1,
  ContainerCharacter,
  Card,
  InfoCharacters,
} from "./charactersStyles.js";

function CardCharacters() {
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
