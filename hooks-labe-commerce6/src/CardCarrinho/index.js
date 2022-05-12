import React from 'react';
import {Container, Infos} from './styles';
import {RiAddCircleLine} from 'react-icons/ri';
import {IoMdRemoveCircleOutline} from 'react-icons/io'

class CardCarrinho extends React.Component{
    render(){
        return(
            <Container name={this.props.name} price={this.props.price} units={this.props.units}>
                <p>{this.props.name}</p>
                <Infos>
                    <IoMdRemoveCircleOutline />
                    <span>{this.props.units} un.</span>
                    <RiAddCircleLine/>
                    <h3>{this.props.price}</h3>
                </Infos>
            </Container>
        )
    }
}

export default CardCarrinho