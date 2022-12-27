import React from "react";
import styled from "styled-components";

import logo from '../../../assets/images/svg/navigationBar/logo.svg';

export const Logo = () => {
    return <NavLogo src={logo}/>
}

const NavLogo = styled.img`
      margin-left: 135px;
    `