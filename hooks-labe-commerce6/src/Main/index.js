import React from "react";
import Card from "../Card";
import Header from "../Header";
import { Container, List } from "./styles";






class Main extends React.Component {

    state={
        store:[
            {
                name:"Camiseta Voyager 1977",
                price: 99,
                link:'image9',
                alt:"Camiseta Voyager 1977",
                key: Date.now()*Math.random(),
                units:1,
            },
            {
                name:"Camiseta NASA Rosa",
                price: 78,
                link:'image2',
                alt:"Camiseta NASA Rosa",
                key: Date.now()*Math.random(),
                units:1,
            },
            {
                name:"Camiseta Chookity POK",
                price: 98,
                link:'image3',
                alt:"Camiseta Chookity POK",
                key: Date.now()*Math.random(),
                units:1,
            },
            {
                name:"Moleton NASA Preto",
                price: 349,
                link:'image4',
                alt:"Moleton NASA Preto",
                key: Date.now()*Math.random(),
                units:1,
            },
            {
                name:"Moleton Homossexualien Cinza",
                price: 299,
                link:'image5',
                alt:"Moleton Homossexualien Cinza",
                key: Date.now()*Math.random(),
                units:1,
            },
            {
                name:"Moleton Homossexualien Preto",
                price: 349,
                link:'image6',
                alt:"Moleton Homossexualien Preto",
                key: Date.now()*Math.random(),
                units:1,
            },
            {
                name:"Moleton Perdido no Espaço",
                price: 299,
                link:'image7',
                alt:"Moleton Perdido no Espaço",
                key: Date.now()*Math.random(),
                units:1,
            },
            {
                name:"Camiseta NASA Branca",
                price: 99,
                link:'image10',
                alt:"Camiseta NASA Branca",
                key: Date.now()*Math.random(),
                units:1,
            },
            {
                name:"Camiseta feminina I NEED MORE SPACE",
                price: 129,
                link:'image1',
                alt:"Camiseta feminina I NEED MORE SPACE",
                key: Date.now()*Math.random(),
                units:1,
            },


        ],
        cart:[
            

        ],
        search:'', 
        order:'pricecres', 
        minValue:2,
        maxValue:1000,
       
    }

    onChangeSearchInput = (event) =>{
        this.setState({search:event.target.value});
    }

    onClickAdd = (key)=>{ 
       const checkCart = this.state.cart.find((product)=>{
           return product.key === key
       })
       if (checkCart){ 
            this.state.cart.map((product) => {
                if (product.key === key){
                    product.units++
                   let newCart = this.state.cart.filter((product)=>{
                        return product.key !== key
                    })
                    newCart = [...newCart,product]
                    this.setState({cart:newCart})
                    return product
                }else{
                    return product
                }
            })

       }else{
           let itemAdd = this.state.market.filter((product)=>{
               return product.key === key
           });
           itemAdd = itemAdd[0]; 
           const newCart = [...this.state.cart,itemAdd];
           this.setState({cart:newCart}); 
       }
    }
    
  render() {

    const filtredList = this.state.store.filter((product)=>{ 
        return product.name.toUpperCase().includes(this.state.search.toUpperCase())})
    .filter((product)=>{
        return product.price <= this.state.maxValue && product.price >= this.state.minValue})
    .sort((a,b)=>{

        if (this.state.order === 'nameAZ'){
            if(a.name < b.name){return -1}else{return 1};}

        if(this.state.order === 'nameZA'){
            if(a.name > b.name){return -1}else{return 1};} 

        if(this.state.order === 'priceAZ'){
            if(a.price < b.price){return -1}else{return 1}} 

        if(this.state.order === 'priceZA'){
            if(a.price < b.price){return -1}else{return 1}} 

        else{return true}
        })  
    

    const listStore = filtredList.map((product)=>{
        return(
            <Card name={product.name} 
            price={`R$ ${product.price},99`} 
            link={product.link} alt={product.alt} 
            key={product.key} 
            onClick={()=>this.onClickAdd(product.key)}/>
        )
    })
    
    // const listCart = this.state.cart.map((product)=>{
    //     return(
    //         <Card name={product.contador} 
    //         price={`R$ ${product.price},99`} 
    //         link={product.link} alt={product.alt} 
    //         key={product.key} 
    //         onClick={()=>this.onClickAdd(product.key)}/>
            
    //     )
    // })
    
    return (
      <Container>
        <Header value={this.state.search} onChange={this.onChangeSearchInput} /> 
        <List>
            {listStore}
        </List>
        <br/>
      </Container>
    );
  }
}

export default Main;
