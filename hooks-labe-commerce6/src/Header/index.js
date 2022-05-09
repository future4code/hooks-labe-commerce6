import React from "react";
import { Container } from "./styles";
import header from '../img/fundo-header.png';

const Header = () =>{
    return (
    <Container>
        <img src={header} alt='space'/>
    </Container>
)}

export default Header