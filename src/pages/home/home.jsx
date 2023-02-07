import React, { useEffect, useState } from 'react'
import Typed from 'react-typed'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Nav from '../../components/navbar/navbar'
import CardCharacters from '../../components/characters/characters'
import Loading from '../../components/loading/loading'

import Logo from '../../images/logo.png'
import Image from '../../images/image.png'

import { ContainerHome, Footer, Header, Section } from './homeStyles'

function Home() {
  const [character, setCharacter] = useState([])
  const [pagesNumber, setPagesNumber] = useState(1)
  const [buscar, setBuscar] = useState('')
  const [info, setInfo] = useState('')
  const [removeLoading, setRemoveLoading] = useState(false)

  const Url = `https://rickandmortyapi.com/api/character/?page=${pagesNumber}&name=${buscar}`

  useEffect(() => {
    setTimeout(() => {
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
            setRemoveLoading(true)
          }
        })
    }, 2000)
  }, [Url])

  AOS.init({
    easing: 'ease-out-quart',
    duration: 1000,
  })

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
          removeLoading={removeLoading}
          setRemoveLoading={setRemoveLoading}
        />
        {!removeLoading && <Loading />}
      </Section>
      <Footer>
        <img src={Logo} alt="logo-image" data-aos="fade-up-right" />
        <h5 data-aos="fade-up-left">
          Desenvolvido por <br /> @coding.jorge
        </h5>
        <h6>@2023</h6>
      </Footer>
    </ContainerHome>
  )
}

export default Home
