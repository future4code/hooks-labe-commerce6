import React from "react";
import { Container } from "./styles";
import logo from '../img/logo.png';

class Header extends React.Component{
    refreshPage = () => {
        window.location.reload(false);
    }
    render(){
        return (
        <Container value={this.props.value} onChange={this.props.onChange}>
            <img src={logo} alt='Logo' onClick={this.refreshPage}/>
            <input type="text" value={this.props.value} onChange={this.props.onChange} placeholder='Search'/>
        </Container>
)}}

export default Header