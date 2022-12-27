import React from "react";
import styled from "styled-components";
import {Logo} from "../components/navigationBar/Logo/Logo";
import {SecondaryDarkButton} from "../components/buttons/SecondaryDarkButton";

const Header = () => {
    return (
        <HeaderContainer className=' flex items-start justify-between pt-4'>
            <Logo />
            <nav className='flex container justify-center'>
                <NavLinks href='#about'>about</NavLinks>
                <NavLinks href='#'>services</NavLinks>
                <NavLinks href='#'>pricing</NavLinks>
                <NavLinks href='#'>blog</NavLinks>

            </nav>
            <SecondaryDarkButton  name={'contact'}/>
        </HeaderContainer>
    )
}

export default Header


const HeaderContainer = styled.div`

`
const NavLinks = styled.a`
  padding-right: 100px;
  text-transform: capitalize;
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  color: #FFFFFF;
`
