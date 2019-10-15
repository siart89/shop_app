import styled, { css } from 'styled-components';

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
    grid-template-rows: 350px 45px 45px;
    grid-template-columns: 1fr;
    align-items:center;
    position:relative;

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
`;

export const ItemTitle = styled.span`
    font-size: 18px;
    font-weight:bold;
    color:#434e5e;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;