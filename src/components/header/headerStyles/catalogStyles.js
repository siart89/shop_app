import styled from 'styled-components';
import { PopUpWrapper } from '../../logIn/styles/popUpWrapper';

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
export const Text = styled.span`
    color:${props => props.color};
    cursor:pointer;
    padding:2px;
    
    &:hover{
        background-color:#ffffff;
    }
`;
export const CatalogPopUp = styled(PopUpWrapper)`
    background:rgba(218, 229, 242, 1);
`;