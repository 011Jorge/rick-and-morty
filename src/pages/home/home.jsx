import React, { useEffect, useState } from 'react'
import Typed from 'react-typed'

import CardCharacters from '../../components/characters/characters'
import Nav from '../../components/navbar/navbar'

import Logo from '../../images/logo.png'
import Image from '../../images/image.png'

import { ContainerHome, Footer, Header, Section } from './homeStyles'

function Home() {
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
    <ContainerHome>
      <Nav setPagesNumber={setPagesNumber} setBuscar={setBuscar} />
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
        <CardCharacters
          character={character}
          setCharacter={setCharacter}
          pagesNumber={pagesNumber}
          setPagesNumber={setPagesNumber}
        />
      </Section>
      <Footer>
        <img src={Logo} alt="logo-image" />
        <h5>
          Desenvolvido por <br /> @coding.jorge
        </h5>
        <h6>@2023</h6>
      </Footer>
    </ContainerHome>
  )
}

export default Home
