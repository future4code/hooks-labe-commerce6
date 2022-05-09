import React from "react";
import Card from "../Card";
import { Container, FilterBox, List } from "./styles";






class Main extends React.Component {

    state={
        market:[
            {
                name:"Camiseta Voyager 1977",
                price: 99,
                link:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQCMcNi65DYGuCWHrgHWm0ZQijR4BREqd9Ly7LSH5CHWlqeop7Clj4fji6wlgUKJwtVFhSOWf5UNva99zHLNFI3TYNSi45q&usqp=CAY',
                alt:"Camiseta Voyager 1977",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Camiseta NASA Rosa",
                price: 78,
                link:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQskkTmNjtiSodPJ2xrXYuChFe2mFcV2yR9BFCA3BWTCzTFso0ixNgJcfI8qcmeV9gcn3yQ_FENzqphxAPkwTWlkF1hrAgKMQ&usqp=CAY',
                alt:"Camiseta NASA Rosa",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Camiseta Chookity POK",
                price: 98,
                link:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcToDR-ZQZs_Tv7EF13hgZlLecBjpRlVrcXWY7kmQRU1-g7X6el54AOVg4Wn02xvFN411alUz0e8ygQE6IXdkZo1BBVHla6Q&usqp=CAY',
                alt:"Camiseta Chookity POK",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Moleton NASA Preto",
                price: 349,
                link:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT8s2pBkldNDvKlvVEDQq0YAC8u7MMKAd192qp2-osXjOtcwWiIspsS2EbDzNbt6x27x8JGY7mOIkJ6VsMcRlgLS3eDWWLhnQ&usqp=CAY',
                alt:"Moleton NASA Preto",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Moleton Homossexualien Cinza",
                price: 299,
                link:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRcYYGfWgHVloZrQ29A2MWv86itGUWh_lw-p6qjhjASTDo9cQvUwlCawn1MWG-NM78tpezY3WX4vowmxp2l9lttezIhiBsL0HqnPjIUTXu1xGobmoLCiRqL&usqp=CAE',
                alt:"Moleton Homossexualien Cinza",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Moleton Homossexualien Preto",
                price: 349,
                link:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTUSMFIyNjF__Vp89h0BiYg9QYb68vw4IWJG51mYlkm0v0qv7RxoQrRTtdEtjP6cvGIzQgjMpRiznWjrNw9fKSoaAq4JUHD&usqp=CAY',
                alt:"Moleton Homossexualien Preto",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Moleton Perdido no Espaço",
                price: 299,
                link:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGtlvHan3k4oXCbQVo_2yv5hU8J0aPJEEGw-2T_pewOPxTT9VZryhSqL7NHf5X-B7TgbjEZT1Jg65mPmaG19q09NNLv9RCLw&usqp=CAY',
                alt:"Moleton Perdido no Espaço",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Camiseta NASA Branca",
                price: 99,
                link:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTCkbGHMSfXkfDGjmn2pRAFhFKHa3RqJ-4LLIFPJZlB58yIgjH9P3whc4u5yCPA8Zq1k10hHod0cFyM2BBnuGtWe0Rnd_mSkw&usqp=CAY',
                alt:"Camiseta NASA Branca",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Camiseta feminina Astronauta branca",
                price: 129,
                link:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSfomYeN4kTYOR93FRJOb6aYKcy72bTXuhUZ2YqL4vOJL9o-5I7RxaRAp85zXv061uJzCK97JIb424W4Hpa4uD10n3Qe35SlQ&usqp=CAY',
                alt:"Camiseta feminina Astronauta branca",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Camiseta feminina I NEED MORE SPACE",
                price: 129,
                link:'https://images.lookhuman.com/render/standard/vttSjrSFjs6xNTaolarNxXp1QyRYbRul/3600-black-z1-t-space-force-space-is-hard.jpg',
                alt:"Camiseta feminina I NEED MORE SPACE",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Camiseta feminina Space Girl Rosa",
                price: 99,
                link:'https://res.cloudinary.com/teepublic/image/private/s--Nz8c6Y9j--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_441/c_crop,g_north_west,h_588,w_441,x_0,y_0/g_north_west,u_upload:v1446840601:production:blanks:wahaid4l0xhexez2gwtn,x_-409,y_-299/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1643022032/production/designs/27468756_0.jpg',
                alt:"Camiseta feminina Space Girl Rosa",
                key: Date.now()*Math.random(),
                contador:1,
            },
            {
                name:"Camiseta feminina Space Girl Rosa", 
                price: 99,
                link:'https://img.ltwebstatic.com/images3_pi/2021/05/06/16202815910569bf6023c8f5b37281961ac425a72a_thumbnail_600x.webp',
                alt:"Camiseta feminina Space Girl Rosa",
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
            price={`R$ ${produto.price},00`} 
            link={produto.link} alt={produto.alt} 
            key={produto.key} 
            onClick={()=>this.onClickAdd(produto.key)}/>
        )
    })
    
    const listCart = this.state.cart.map((produto)=>{
        return(
            <Card name={produto.contador} 
            price={`R$ ${produto.price},00`} 
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
