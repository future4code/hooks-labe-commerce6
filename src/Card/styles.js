import styled from 'styled-components';


export const Container = styled.div`
    width: 320px;
    height: 450px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding:5px;
    gap:5px;
    border-radius:20px;
    background-color:rgba(211,188,252,.5);

`;

export const Product = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    flex:none;
    
    
    
    img{
        width:90%;
        margin-bottom:25px;
    }
    p{
        letter-spacing:1px;
        color:rgb(0,0,0,.6);
        margin-bottom:20px;
        color:white;
        text-align:center;
        max-width:80%
    }
    span{
        text-align:center;
        color:white;
        font-weight:bold;
        font-size:1.2rem;
        margin-bottom:10px;
    }
    button{
        height:40px;
        font-size:1rem;
        border:none;
        background-color:white;
        cursor: pointer;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:20px;
        gap:15px;
        background-color:rgb(0,0,0,.2);
        padding: 0 10px;
        color:white;

        &:hover{
        background-color: rgb(0,255,0,.3);

        &:active{
            transform:scale(1.05);
        }
    }
    }
    svg{
        transform:scale(1.5);
        color:green;
    }
   

`;