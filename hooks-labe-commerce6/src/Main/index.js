import React from "react";
import Card from "../Card";
import { Container, FilterBox, List } from "./styles";






class Main extends React.Component {

    state={
        market:[
            {
                name:"Camiseta Voyager 1977",
                price: 99,
                link:'image9',
                alt:"Camiseta Voyager 1977",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Camiseta NASA Rosa",
                price: 78,
                link:'image2',
                alt:"Camiseta NASA Rosa",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Camiseta Chookity POK",
                price: 98,
                link:'image3',
                alt:"Camiseta Chookity POK",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Moleton NASA Preto",
                price: 349,
                link:'image4',
                alt:"Moleton NASA Preto",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Moleton Homossexualien Cinza",
                price: 299,
                link:'image5',
                alt:"Moleton Homossexualien Cinza",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Moleton Homossexualien Preto",
                price: 349,
                link:'image6',
                alt:"Moleton Homossexualien Preto",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Moleton Perdido no Espaço",
                price: 299,
                link:'image7',
                alt:"Moleton Perdido no Espaço",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Camiseta NASA Branca",
                price: 99,
                link:'image10',
                alt:"Camiseta NASA Branca",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Camiseta feminina I NEED MORE SPACE",
                price: 129,
                link:'image1',
                alt:"Camiseta feminina I NEED MORE SPACE",
                key: Date.now()*Math.random(),
                contador:1,
            },


        ],
        cart:[
            

        ],//ARMAZENA ITENS DO CARRINHO
        busca:'', //INPUT PARA PESQUISA
        order:'pricecres', 
        valorminimo:2,
        valormaximo:1000,
       
    }

    onChangeBusca = (event) =>{
        this.setState({busca:event.target.value});
    }//ATRIBUI VALOR DO INPUT PARA O STATE DE BUSCA

    onClickAdd = (key)=>{ 
       const testagem = this.state.cart.find((produto)=>{
           return produto.key === key
       })//VERIFICA SE A KEY DO ITEM QUE FOI SELECIONADO EXISTE DENTRO DO STATE CART. SE TIVER, TESTAGEM RECEBERÁ O VALOR DA KEY, SE NÃO, RECEBE FALSE.
       if (testagem){ //SE TESTAGEM !== FALSE FAZ UM MAP DO CART. SE KEY JÁ EXISTIR NO CARRINHO, ADICIONA ++ NO CONTADOR.
            this.state.cart.map((produto) => {
                if (produto.key === key){
                    produto.contador++
                   let novoCart = this.state.cart.filter((produto)=>{
                        return produto.key !== key
                    })
                    novoCart = [...novoCart,produto]
                    this.setState({cart:novoCart})
                    return produto
                }else{
                    return produto
                }
            })

       }else{//SE KEY NÃO EXISTIR NO CART, ELE ADICIONA. CRIA UMA VARIAVEL QUE CONTEM SÓ O ITEM E DEPOIS ADICIONA ELE NO ESTADO.
           let itemAdicionar = this.state.market.filter((produto)=>{
               return produto.key === key
           });
           itemAdicionar = itemAdicionar[0]; 
           const newCart = [...this.state.cart,itemAdicionar];
           this.setState({cart:newCart}); 
       }
    }
    
  render() {
    const listaFiltrada = this.state.market.filter((produto)=>{ 
        return produto.name.toUpperCase().includes(this.state.busca.toUpperCase())})//AQUI 
    .filter((produto)=>{
        return produto.price <= this.state.valormaximo && produto.price >= this.state.valorminimo})
    .sort((a,b)=>{

        if (this.state.order === 'namecres'){
            if(a.name < b.name){return -1}else{return 1};}

        if(this.state.order === 'namedesc'){
            if(a.name > b.name){return -1}else{return 1};} 

        if(this.state.order === 'pricecres'){
            if(a.price < b.price){return -1}else{return 1}} 

        if(this.state.order === 'pricedes'){
            if(a.price < b.price){return -1}else{return 1}} 

        else{return true}
        })  
    

    const listMarket = listaFiltrada.map((produto)=>{
        return(
            <Card name={produto.name} 
            price={`R$ ${produto.price},99`} 
            link={produto.link} alt={produto.alt} 
            key={produto.key} 
            onClick={()=>this.onClickAdd(produto.key)}/>
        )
    })
    
    const listCart = this.state.cart.map((produto)=>{
        return(
            <Card name={produto.contador} 
            price={`R$ ${produto.price},99`} 
            link={produto.link} alt={produto.alt} 
            key={produto.key} 
            onClick={()=>this.onClickAdd(produto.key)}/>
            
        )
    })
    
    return (
      <Container>
        <FilterBox>
            <input type="text" value={this.state.busca} onChange={this.onChangeBusca}/>
            
        </FilterBox>
        <List>
            {listMarket}
        </List>
        <br/>
        <List>
            <h1>Aqui embaixo é o carrinho. </h1>
            {listCart}
        </List>
      </Container>
    );
  }
}

export default Main;
