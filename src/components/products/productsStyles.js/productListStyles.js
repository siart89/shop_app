import styled, { css } from 'styled-components';
import { Button } from '../../logIn/styles/logInFieldsStyles';

export const ListWrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 17px;
    margin-top:25px;
`;

export const Item = styled.div.attrs(props => ({
    sale: props.sale
}))`
    display:grid;
    width:100%;
    justify-self:center;
    grid-template-rows: 250px 45px 45px;
    grid-template-columns: 1fr;
    align-items:center;
    position:relative;
    padding: 0 15px 10px;
    box-shadow: 0 0 10px #e0dfde;
    border-radius:3px;

    ${props => props.sale && css`
        
        &::before{
            content: "Sale";
            display:block;
            position:absolute;
            top:1em;
            right: .5em;
            background-color:#e6373a;
            color:#fff;
            font-size:14px;
            padding: 2px 5px;
            font-weight:bold;
            border-radius: 3px;
        }
    `}
`;

export const ItemImg = styled.img`
    max-width:100%;
    max-height:230px;
`;

export const ItemTitle = styled.div`
    width:100%;
    font-size: 18px;
    font-weight:bold;
    color:#434e5e;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const AddCartButton = styled(Button)`
    background-color:#f5b00f;
    width:max-content;
`;