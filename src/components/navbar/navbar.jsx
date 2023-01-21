import React from 'react'

import ImageLogo from '../../images/logo.png'

import { ContainerNavbar, Image, Input } from './navbarStyles'

function Nav({ setPagesNumber, setBuscar }) {
  return (
    <ContainerNavbar>
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
