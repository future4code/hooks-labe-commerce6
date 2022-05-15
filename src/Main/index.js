import React from "react";
import Card from "../Card";
import CardCarrinho from "../CardCarrinho";
import Header from "../Header";
import { Container, List, ProductsCart, Filter } from "./styles";
import {FaSortAlphaDownAlt,FaSortAlphaDown,FaSortAmountDownAlt,FaSortAmountDown} from 'react-icons/fa';






class Main extends React.Component {

    state={
        store:[
            {
                name:"Camiseta Voyager 1977",
                price: 100,
                link:'image9',
                alt:"Camiseta Voyager 1977",
                key: Date.now()*Math.random(),
                units:0,
            },
            {
                name:"Camiseta NASA Rosa",
                price: 79,
                link:'image2',
                alt:"Camiseta NASA Rosa",
                key: Date.now()*Math.random(),
                units:0,
            },
            {
                name:"Camiseta Chookity POK",
                price: 100,
                link:'image3',
                alt:"Camiseta Chookity POK",
                key: Date.now()*Math.random(),
                units:0,
            },
            {
                name:"Moleton NASA Preto",
                price: 350,
                link:'image4',
                alt:"Moleton NASA Preto",
                key: Date.now()*Math.random(),
                units:0,
            },
            {
                name:"Moleton Homossexualien Cinza",
                price: 300,
                link:'image5',
                alt:"Moleton Homossexualien Cinza",
                key: Date.now()*Math.random(),
                units:0,
            },
            {
                name:"Moleton Homossexualien Preto",
                price: 350,
                link:'image6',
                alt:"Moleton Homossexualien Preto",
                key: Date.now()*Math.random(),
                units:0,
            },
            {
                name:"Moleton Perdido no Espaço",
                price: 300,
                link:'image7',
                alt:"Moleton Perdido no Espaço",
                key: Date.now()*Math.random(),
                units:0,
            },
            {
                name:"Camiseta NASA Branca",
                price: 100,
                link:'image10',
                alt:"Camiseta NASA Branca",
                key: Date.now()*Math.random(),
                units:0,
            },
            {
                name:"Camiseta feminina I Need More Space",
                price: 130,
                link:'image1',
                alt:"Camiseta feminina I NEED MORE SPACE",
                key: Date.now()*Math.random(),
                units:0,
            },


        ],
        cart:[
        ],
        
        cartVisibility:false,
        search:"", 
        order:'nameAZ', 
        minValue:"",
        maxValue:"",
       
    }
orderAZ =   ()=>{this.setState({order:"nameAZ"})};
orderZA =   ()=>{this.setState({order:"nameZA"})};
orderDown = ()=>{this.setState({order:"priceDown"})};
orderUp =   ()=>{this.setState({order:"priceUp"})};  

    onChangeSearchInput = (event) =>{
        this.setState({search:event.target.value});
    }
    onChangeMinValue = (event) =>{
        this.setState({minValue:event.target.value});
    }
    onChangeMaxValue = (event) =>{
        this.setState({maxValue:event.target.value});
    }

    onClickDecrease = (key)=>{
        let newCart = this.state.cart.map((product)=>{
           if(product.key === key){
               product.units-=1 
               return product
           }else{
               return product
           };  
        })
        newCart = newCart.filter((product)=>{
            return product.units > 0
        })
        this.setState({cart:newCart})
          
    };
    onClickSumUp = (key)=>{
        let newCart = this.state.cart.map((product)=>{
            if(product.key === key){
                product.units+=1
                return product
            }else{
                return product
            };
         })
        this.setState({cart:newCart})
          
    };
    onClickRemove = (key)=>{
     const newCart = this.state.cart.filter((product)=>{
         if (product.key === key){
             product.units = 0
         }else{
            return product
    }})
        
      this.setState({cart:newCart})
       
    };
   
    priceCart = () =>{
    if(this.state.cart.length >0){
      let totalValue = this.state.cart.map((product)=>{
            return product.price * product.units 
        })
       totalValue = totalValue.reduce((prev,curr)=>{
           return prev+curr
       } )
       return totalValue   
    }else{
        return 0
    }
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
           let itemAdd = this.state.store.filter((product)=>{
               return product.key === key
           });
           itemAdd = itemAdd[0]; 
           itemAdd.units++
           const newCart = [...this.state.cart,itemAdd];
           this.setState({cart:newCart}); 
       }
       this.setState({cartVisibility:true})
         
    }
    toggleVisibilityCart = () =>{
        this.setState({cartVisibility:!this.state.cartVisibility})
    }

   componentDidUpdate(){
        localStorage.setItem("cart", JSON.stringify(this.state.cart))
        
   }
   componentDidMount(){
        const cartFromLocalString = localStorage.getItem('cart');
        const cartFromLocal = JSON.parse(cartFromLocalString);  
       if(cartFromLocalString){this.setState({cart:cartFromLocal})}
   }
   
  render() {

    const filtredList = this.state.store.filter((product)=>{ 
        return product.name.toUpperCase().includes(this.state.search.toUpperCase())})
    .filter((product)=>{
        if(this.state.maxValue > 0 && this.state.minValue  > 0){
            return product.price <= this.state.maxValue && product.price >= this.state.minValue
        }
        if(this.state.maxValue){
            return product.price <= this.state.maxValue
        }if(this.state.minValue){
            return product.price >= this.state.minValue
        }else{
            return product
        }})
    .sort((a,b)=>{

        if (this.state.order === 'nameAZ'){
            if(a.name < b.name){return -1}else{return 1};}

        if(this.state.order === 'nameZA'){
            if(a.name > b.name){return -1}else{return 1};} 

        if(this.state.order === 'priceDown'){
            if(a.price > b.price){return -1}else{return 1}} 

        if(this.state.order === 'priceUp'){
            if(a.price < b.price){return -1}else{return 1}} 

        else{return true}
        })  
    

    const listStore = filtredList.map((product)=>{
        return(
            <Card 
            name={product.name} 
            price={`R$ ${product.price},00`} 
            link={product.link} alt={product.alt} 
            key={product.key} 
            onClick={()=>this.onClickAdd(product.key)}/>
        )
    })
    

    const listCart = this.state.cart.map((product)=>{
        return(
            <CardCarrinho 
            name={product.name} 
            price={`R$ ${product.price},00`} 
            units={product.units}
            key={product.key} 
            link={product.link}
            onClickDecrease={()=>this.onClickDecrease(product.key)}
            onClickSumUp={()=>this.onClickSumUp(product.key)}
            onClickRemove={()=>this.onClickRemove(product.key)}
            />
           
        )
       
    })
    
    return (
      <Container>
        <Header value={this.state.search} onChange={this.onChangeSearchInput} onClickCart={this.toggleVisibilityCart} valueCart={this.priceCart}/> 
        <Filter>
            <h3 onClick={this.priceCart}>Ordenar e Filtrar:</h3>
            <div>
                <div onClick={this.orderAZ}>
                    <p>NOME:</p>
                    <FaSortAlphaDown/>
                </div>
                <div  onClick={this.orderZA}>
                    <p>NOME:</p>
                    <FaSortAlphaDownAlt/>
                </div>
                <div  onClick={this.orderDown}>
                    <p>PREÇO:</p>
                    <FaSortAmountDown/>
                </div>
                <div  onClick={this.orderUp}>
                    <p>PREÇO:</p>
                    <FaSortAmountDownAlt/>
                </div>
                <input placeholder="Valor min. (R$)" value={this.state.minValue} onChange={this.onChangeMinValue}/>
                <input placeholder="Valor Máx. (R$)" value={this.state.maxValue} onChange={this.onChangeMaxValue}/>
            </div>
        </Filter>
        <ProductsCart visibility={this.state.cartVisibility.toString()}>
        {listCart} 
        </ProductsCart>
        <List>
            {listStore}
        </List>
        <br/>
      </Container>
    );
  }
}

export default Main;
