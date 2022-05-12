import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:50px;
    padding: 0 10px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    background-color:rgb(102,50,153);
    

    p{
        font-size:1rem;
        max-width:45%;
        
    }

    span{
        font-size:1rem;
        font-weight:bold;
        white-space:nowrap;
       
    }
    h3{
        font-size:1rem;
        width:100px;
        height:20px;
        border-radius:5px;
        outline:0;
        border:none;
        margin-left:15px;
    }
    svg{
        transform:scale(1.3);
        cursor: pointer;
    }
`;
export const Infos = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    gap:10px;
    width:50%;

`;