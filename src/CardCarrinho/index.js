import React from 'react';
import {Container, Infos, Name} from './styles';
import {RiAddCircleLine} from 'react-icons/ri';
import {IoMdRemoveCircleOutline} from 'react-icons/io'

class CardCarrinho extends React.Component{
    render(){
        return(
            <Container>
                <Name>
                    <img src={require(`../img/${this.props.link}.png`)} alt="this.props.name" />
                    <p>{this.props.name}</p>
                </Name>
                <Infos>
                    <div >
                        <IoMdRemoveCircleOutline onClick={this.props.onClickDecrease}/>
                            <span>{this.props.units} un.</span>
                        <RiAddCircleLine onClick={this.props.onClickSumUp}/>
                    </div>
                    <h3>{this.props.price}</h3>
                    <button onClick={this.props.onClickRemove}>remover</button>
                </Infos>
            </Container>
        )
    }
}

export default CardCarrinho