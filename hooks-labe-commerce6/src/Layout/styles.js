import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    background-image:url(https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80);

    overflow-y:scroll;
    scrollbar-width:none;
    -ms-overflow-style:none;
    &::-webkit-scrollbar{
        width:0;
        height:0;
    }
`;
