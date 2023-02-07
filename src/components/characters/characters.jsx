import React from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Navigation from '../navigation/navigation'

import {
  Card,
  ContainerCharacter,
  H1,
  InfoCharacters,
} from './charactersStyles'

function CardCharacters({ character, pagesNumber, setPagesNumber }) {
  AOS.init({
    easing: 'ease-out-quart',
    duration: 1000,
    once: false,
  })

  return (
    <>
      <H1>Personagens</H1>
      <Navigation pagesNumber={pagesNumber} setPagesNumber={setPagesNumber} />
      <ContainerCharacter>
        {character === 'There is nothing here' ? (
          <div className="noCharacters">
            <h3>Nenhum personagem encontrado!</h3>
          </div>
        ) : (
          <div className="withCharacters">
            {character?.map((item) => {
              return (
                <Card key={item.id} data-aos="fade-up" data-aos-delay="100">
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
          </div>
        )}
      </ContainerCharacter>
    </>
  )
}

export default CardCharacters
