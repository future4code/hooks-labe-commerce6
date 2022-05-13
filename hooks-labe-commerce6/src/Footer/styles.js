import styled from "styled-components"

export const Container = styled.footer`
    width: 100%;
    height: 40vh;
    background-color: #d17878;
    display: flex;  
    flex-direction: row;
    justify-content: space-between;
    padding: 0 8vw;


`;

export const Bloco = styled.div`
display: flex; 
flex-direction: column;
gap: 5px;
margin-top: 15px;

a{
    text-decoration: none;
    color: white;
}
a:hover{
    font-weight: bold;
    background-color: gray;
}
`;

export const BlocoCentral = styled.div`
display: flex;
flex-direction: row;
align-items: center;

div{
    display:flex;
    flex-direction: column;
}

img:hover{
    -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
        }
`;