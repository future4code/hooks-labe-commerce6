import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    
`;

export const List = styled.div`
    width:85%;
    display:Flex;
    flex-direction:row;
    justify-content:center;
    flex-wrap:wrap;
    gap:30px;
    margin-top:5vh;
`;

export const ProductsCart = styled.div`
    width:30vw;
    height:90vh;
    border:solid black 1px;
    display:flex;
    flex-direction:column;
    gap:3px;
    background-color:rgb(0,0,0,.9);
    position: fixed;
    top:10vh;
    right:0;
    z-index:999;
    visibility:${(props)=>(props.visibility? "visibility":"hidden")};
    @media (max-width:500px){
        width:100vw;
    }
`;

export const Filter = styled.div`
    width:100vw;
    height:50px;
    background: rgb(33,25,60);
    background: linear-gradient(237deg, rgba(33,25,60,0.8939950980392157) 16%, rgba(102,50,153,0.8491771708683473) 42%, rgba(200,101,236,0.8239670868347339) 91%, rgba(220,132,233,0.6530987394957983) 99%);    
    margin-top:10vh;
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   
    div{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        gap:35px;
        div{
            display:flex;
            gap:5px;
            cursor:pointer;
            border-radius:5px;
            &:hover{
                background-color:rgba(211,188,252,.5);
            }
            &:active{
                transform:scale(1.05);
            }
        }
    }
`;

