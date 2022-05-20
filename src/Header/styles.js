import styled from 'styled-components';

export const Container = styled.header`
    width:100%;
    height:10vh;
    background: rgb(33,25,60);
    background: linear-gradient(237deg, rgba(33,25,60,0.8939950980392157) 16%, rgba(102,50,153,0.8491771708683473) 42%, rgba(200,101,236,0.8239670868347339) 91%, rgba(220,132,233,0.6530987394957983) 99%);    
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:10px 0;
    padding-left:10vw;
    position:fixed;
    z-index:9999;
    @media (max-width:700px){
        padding-left:3vw;
        }

    img{
       height:10vh;
       margin-right:10vw;
       &:hover{
           cursor: pointer;
       }
       @media (max-width:700px){
           height:5vh;
        margin-right:3vw;
        }
    }
    input{
        width:35vw;
        height:35px;
        border:groove 1px rgb(0,0,0,.6);
        background-color:rgb(0,0,0,.2);
        border-radius:20px;
        color:white;
        font-size:16px;
        padding-left:25px;
        outline:0;
        &::placeholder{
            color:rgba(255,255,255,.6);
        }
        @media (max-width:700px){
        width:25vw;
        }
    }
    div{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        gap:25px;
        position:absolute;
        right:10vw;

        svg{
        transform:scale(2);
        color:white;
        cursor:pointer;    

        &:hover{
            color:rgb(102,50,153);
        }
        &:active{
            transform:scale(2.2);
        }
    }
    p{
        font-size:1.2rem;
        padding: 2px 10px;
        color:white;
        background-color:rgba(0,255,0,.3);
        border:none;
        border-radius:10px;
    }
    @media (max-width:700px){
        right:5vw;
    }
    }
   
`;  