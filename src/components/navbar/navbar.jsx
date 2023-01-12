import React from "react";

import ImageLogo from "../../images/logo.png";

import { ContainerNavbar, Image, Input } from "./navbarStyles";

function Nav() {
  return (
    <ContainerNavbar>
      <Image src={ImageLogo} alt="logo-rick-and-morty" />
      <Input type="text" placeholder="Buscar..." />
    </ContainerNavbar>
  );
}

export default Nav;
