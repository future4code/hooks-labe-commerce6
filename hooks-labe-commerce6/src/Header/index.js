import React from "react";
import { Container } from "./styles";
import logo from '../img/logo.png';

const Header = () =>{
    return (
    <Container>
        <img src={logo} alt='space'/>
    </Container>
)}

export default Header