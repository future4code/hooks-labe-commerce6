import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
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
}
`