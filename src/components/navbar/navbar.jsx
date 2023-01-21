import React from 'react'

import ImageLogo from '../../images/logo.png'

import { ContainerNavbar, Image, Input } from './navbarStyles'

function Nav({ setPageNumber, setBuscar }) {
  return (
    <ContainerNavbar>
      <Image src={ImageLogo} alt="logo-rick-and-morty" />
      <Input
        onChange={(e) => {
          setPageNumber(1)
          setBuscar(e.target.value)
        }}
        type="text"
        placeholder="Buscar..."
      />
    </ContainerNavbar>
  )
}

export default Nav
