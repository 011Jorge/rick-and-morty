import React from "react";

import ImageLogo from "../../images/logo.png";

import { ContainerNavbar, Image } from "./navbarStyles";

function Nav() {
  return (
    <ContainerNavbar>
      <Image src={ImageLogo} alt="logo-rick-and-morty" />
    </ContainerNavbar>
  );
}

export default Nav;