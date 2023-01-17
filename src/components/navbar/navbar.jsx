import React, { useState } from 'react'

import ImageLogo from '../../images/logo.png'

import { ContainerNavbar, Image, Input } from './navbarStyles'

function Nav() {
  const [search, setSearch] = useState('')

  return (
    <ContainerNavbar>
      <Image src={ImageLogo} alt="logo-rick-and-morty" />
      <Input
        value={search}
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Buscar..."
      />
    </ContainerNavbar>
  )
}

export default Nav
