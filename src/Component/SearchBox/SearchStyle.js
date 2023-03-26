import styled from "styled-components";

export const MainContainer = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
`

export const SearchBoxContainer = styled.div`
    width:600px;
    background-color:rgba(206,234,236,0.1);
    padding:10px 15px;
    display:flex;
    margin:2rem 0.15rem;
    border-radius:7px;
    box-shadow:inset 0 0 7px 5px #fff;
`
export const Icon = styled.div`
    padding:5px;
    color:#fff;
    background-color:#31857b;
    font-size:2rem;
    border-radius:50%;
    border:2px solid white;
    display:flex;
    align-items:center;
    cursor:pointer;
    &:hover{transform:scale(0.95);};
    &:active{transform:scale(1);};
`
export const Input = styled.input`
    color:#fff;
    padding:0px 10px;
    flex:1;
    font-weight:600;
    font-size:1.8rem;
    background:transparent;
    border:none;
    outline:none;
`
export const TopBox = styled(SearchBoxContainer)`
    flex:1;
    flex-direction:column;
    margin:0;
`

export const Content=styled.div`
    border-radius:10px;
    display:flex;
    margin-bottom:10px;
    padding:0;
    flex-direction:column;
    background:rgb(188 166 124 / 0.4);
`
export const Question = styled.p`
    margin:10px;
    line-height: 0.9;
    padding:10px;
    border-radius:10px;
    font-size:1.7rem;
    font-weight:500;
    color:black;
    background:rgba(152,182,139, 0.5);
`
export const Answer = styled(Question)`
    background:rgba(182,152,139, 0.5);
    font-size:1.5rem;
    margin-top:-5px;
    color:white;
`