import React from "react";
import { Container } from "./styles";
import logo from '../img/logo.png';

const Header = () =>{
    const refreshPage = () => {
        window.location.reload(false);
    }
    return (
    <Container>
        <img src={logo} alt='Logo' onClick={refreshPage}/>
    </Container>
)}

export default Header