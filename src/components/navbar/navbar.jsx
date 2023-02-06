import React from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import ImageLogo from '../../images/logo.png'

import { ContainerNavbar, Image, Input } from './navbarStyles'

function Nav({ setPagesNumber, setBuscar }) {
  AOS.init({
    easing: 'ease-out-quart',
    duration: 2000,
    once: true,
  })
  return (
    <ContainerNavbar data-aos="fade-down">
      <Image src={ImageLogo} alt="logo-rick-and-morty" />
      <Input
        onChange={(e) => {
          setPagesNumber(1)
          setBuscar(e.target.value)
        }}
        type="text"
        placeholder="Buscar..."
      />
    </ContainerNavbar>
  )
}

export default Nav
