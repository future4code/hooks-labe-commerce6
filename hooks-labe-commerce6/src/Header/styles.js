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
    padding-left:15vw;
    position:fixed;
    z-index:9999;

    img{
       height:10vh;
       margin-right:15vw;
       &:hover{
           cursor: pointer;
       }
    }
    input{
        width:25vw;
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
    }
`;  