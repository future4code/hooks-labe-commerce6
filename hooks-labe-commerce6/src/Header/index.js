import React from "react";
import { Container } from "./styles";
import logo from '../img/logo.png';
import logo2 from '../img/logo2.png'
const Header = () =>{
    return (
    <Container>
        <img src={logo} alt='space'/>
        <img src={logo2} alt='space'/>
    </Container>
)}

export default Header