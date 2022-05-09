import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {Container, Product} from './styles';



class Card extends React.Component{
    render(){
        return(
            <Container>
                <Product price={this.props.price} link={this.props.link} alt={this.props.alt}>
                    <img src={this.props.link} alt={this.props.alt}/>
                    <p>{this.props.name}</p>
                    <span>{this.props.price}</span>
                    <button onClick={this.props.onClick}>
                    <AiOutlineShoppingCart/> Add to Cart 
                    </button>
                </Product>
            </Container>
        )
    }
}
export default Card 