import React from "react";

import ImageLogo from "../../images/logo.png";

import { ContainerNavbar, Image, Input, Navbar, Link } from "./navbarStyles";

function Nav() {
  return (
    <ContainerNavbar>
      <Image src={ImageLogo} alt="logo-rick-and-morty" />
      <Input type="text" placeholder="Buscar..." />

      <Navbar className="">
        <Link>
          <a href="#">Character</a>
        </Link>
        <Link>
          <a href="#">Location</a>
        </Link>
        <Link>
          <a href="#">Episode</a>
        </Link>
      </Navbar>
    </ContainerNavbar>
  );
}

export default Nav;
