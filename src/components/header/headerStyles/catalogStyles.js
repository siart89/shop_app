import styled from 'styled-components';

export const BurgerWrapper = styled.div`
    color:#fff;
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const TitleWrapper = styled(BurgerWrapper)`
    cursor:pointer;
`;

export const Title = styled.span`
    padding-left:10px;
    letter-spacing:0.5px;
`;