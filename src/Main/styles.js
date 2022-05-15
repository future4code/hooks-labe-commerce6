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
    margin-top:20vh;
`;

export const ProductsCart = styled.div`
    width:20vw;
    min-width:400px;
    max-height:410px;
    display:flex;
    flex-direction:column-reverse;
    gap:3px;
    background-color:rgb(0,0,0,.9);
    position:absolute;
    top:17.5vh;
    right:0;
    z-index:999;
    visibility:${(props)=>(props.visibility === 'true'? "visibility":"hidden")};
    
    @media (max-width:500px){
        width:100vw;
    }
    overflow-y:scroll;
    scrollbar-width:none;
    -ms-overflow-style:none;

    &::-webkit-scrollbar{
        width:0;
        height:0;
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
    position:fixed;
    z-index:9999;
    @media (max-width:700px){
        p{
            display:none;
        }
        div{
        input{
            width:100px;
            padding:0 5px;
        }}
    }
    
   
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
    input{
        width:150px;
        height:20px;
        border-radius:10px;
        outline:none;
        border: 0.5px solid black;
        color:white;
        padding:0 10px;
        background-color:rgb(0,0,0,.2);

        &::placeholder{
            color:rgb(255,255,255,.6);
        }
    }
`;

