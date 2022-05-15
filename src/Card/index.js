import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {Container, Product} from './styles';



class Card extends React.Component{
    render(){
        return(
            <Container>
                <Product>
                <img src={require(`../img/${this.props.link}.png`)} alt={this.props.alt}/>
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