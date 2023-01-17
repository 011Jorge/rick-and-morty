/* eslint-disable  */
import React from 'react'
import Typed from 'react-typed'

import CardCharacters from '../../components/characters/characters'
import Nav from '../../components/navbar/navbar'

import Image from '../../images/image.png'

import { ContainerHome, Footer, Header, Section } from './homeStyles'

function Home() {
  return (
    <ContainerHome>
      <Nav />
      <Header>
        <img src={Image} alt="image-rick-and-morty" style={{ width: 500 }} />
        <div>
          <h1>
            <Typed strings={['Aventure-se descobrindo']} typeSpeed={50} />
          </h1>
          <p>
            <Typed
              strings={[
                'informações sobre todos os personagens do incrível universo maluco de rick and morty',
              ]}
              typeSpeed={50}
            />
          </p>
        </div>
      </Header>
      <Section>
        <CardCharacters />
      </Section>
      <Footer></Footer>
    </ContainerHome>
  )
}

export default Home
