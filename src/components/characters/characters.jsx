import React, { useEffect, useState } from 'react'
import Navigation from '../navigation/navigation.jsx'

import {
  Card,
  ContainerCharacter,
  H1,
  InfoCharacters,
} from './charactersStyles'

function CardCharacters() {
  const [character, setCharacter] = useState([])
  const [pagesNumber, setPagesNumber] = useState(1)
  const [buscar, setBuscar] = useState('')
  const [info, setInfo] = useState('')

  const Url = `https://rickandmortyapi.com/api/character/?page=${pagesNumber}&name=${buscar}`

  useEffect(() => {
    if (pagesNumber === 0) {
      return setCharacter(null)
    }
    fetch(Url)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setCharacter(data.error)
        } else {
          setCharacter(data.results)
          setInfo(data.info)
        }
      })
  }, [Url])

  return (
    <>
      <H1>Personagens</H1>
      <Navigation pagesNumber={pagesNumber} setPagesNumber={setPagesNumber} />
      <ContainerCharacter>
        {character?.map((item) => {
          return (
            <Card key={item.id}>
              <img src={item.image} alt={item.name} />
              <InfoCharacters>
                <h2>{item.name}</h2>
                <div>
                  <h4>
                    {item.status === 'Alive' ? (
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
          )
        })}
      </ContainerCharacter>
    </>
  )
}

export default CardCharacters
