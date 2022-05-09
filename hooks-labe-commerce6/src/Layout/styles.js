import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;

    overflow-y:scroll;
    scrollbar-width:none;
    -ms-overflow-style:none;
    &::-webkit-scrollbar{
        width:0;
        height:0;
    }
`;
