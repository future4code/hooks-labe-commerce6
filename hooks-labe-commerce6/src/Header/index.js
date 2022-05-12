import React from "react";
import { Container } from "./styles";
import logo from '../img/logo.png';
import {CgShoppingCart} from 'react-icons/cg'

class Header extends React.Component{
    refreshPage = () => {
        window.location.reload(false);
    }
    render(){
        return (
        <Container value={this.props.value} onChange={this.props.onChange} onClickCart={this.props.onClick}>
            <img src={logo} alt='Logo' onClick={this.refreshPage}/>
            <input type="text" value={this.props.value} onChange={this.props.onChange} placeholder='Search'/>
            <CgShoppingCart onClick={this.props.onClickCart}/>
        </Container>
)}}

export default Header