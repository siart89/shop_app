import styled from 'styled-components';

export const ListWrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 17px;
    margin-top:25px;
`;

export const Item = styled.div`
    display:grid;
    grid-template-rows: 1fr 45px 45px;
    grid-template-columns: 1fr;
    align-items:center;
`;

export const ItemImg = styled.img`
    max-width:100%;
    width:100%;
`;

export const ItemTitle = styled.span`
    font-size: 18px;
    font-weight:bold;
    color:#434e5e;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;