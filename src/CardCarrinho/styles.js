import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100px;
    padding: 0 10px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    padding:10px;
    gap:20px;
    background-color:rgb(102,50,153);
    

    p{
        font-size:1rem;
        margin-left:20px;
        
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
    justify-content:space-between;
    align-items:center;
    gap:10px;
    width:100%;

    div{
        display:flex;
        align-items:center;
        gap:15px;
        margin-left:10px;
    }
    button{
        font-size:1rem;
        background-color:transparent;
        border:none;
        cursor:pointer;
        padding:3px;
        border-radius:10px;

        &:hover{
            background-color: rgb(0,0,0,0.3);   
        }
        &:active{
            color:white;
            background-color:red;
        }
    }

`;

export const Name = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;

    img{
        padding:3px;
        height:40px;
        border:1px solid rgb(0,0,0,.6);
    }
`;