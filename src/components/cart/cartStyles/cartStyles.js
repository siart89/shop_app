import styled from 'styled-components';

export const CartWrapper = styled.div`
    max-width: 1020px;
    margin: 20px auto;
    box-shadow: 0 1px 4px #e0e0e0;
    background-color: #f0f0f0;
    position:relative;
`;
export const CartSection = styled.section`
    display:grid;
    width: 100%;
    padding: 8vh 25px 0;
    grid-template-columns: 150px 7fr 1fr 2fr 1fr;
    grid-auto-rows: 150px; 
    grid-gap: 15px;
`;

export const CartImg = styled.img`
    max-width:100%;
    max-height:100%;
`;
export const CartText = styled.div`
    padding-top:15px;
    display:flex;
    flex-direction:column;
`;

export const ProductAmount = styled.div`
    display:flex;
    justify-content:center;
    padding-top:15px;
    align-items:flex-start;
`;

export const AmountButton = styled.span`
    display:inline-block;
    border:1px solid black;
    width:25px;
    height:25px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    font-weight:bold;
`;
export const Count = styled.span`
    display:flex;
    align-items:center;
    justify-content:center;
    width:35px;
    height:25px;
    border-top: 1px solid black;
    border-bottom:1px solid black;
    font-size:13px;
`;

export const RemoveButton = styled.span`
    font-size:12px;
    color:#b5b5b5;
    cursor:pointer;

    &:hover{
        color:#9c9c9c
    }
`;