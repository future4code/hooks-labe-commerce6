import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap'); // importo a fonte aqui e o font-family lá em baixo dentro do root

*{    
    padding:0;
    margin:0;
    box-sizing:border-box;
}
html, body, #root{
    width:100vw;
    display:flex;
    min-height:100vh;
    max-width:100vw;
    background-color:rgb(0,0,0,.1);
    overflow-y:scroll;
    scrollbar-width:none;
    -ms-overflow-style:none;

    &::-webkit-scrollbar{
        width:0;
        height:0;
    }

    font-family: 'Righteous', cursive;
}
`;
