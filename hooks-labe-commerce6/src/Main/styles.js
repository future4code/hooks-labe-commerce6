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
    margin-top:15vh;
`;

export const ProductsCart = styled.div`
    width:400px;
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

