import styled, { css } from 'styled-components';
import Icon from 'react-icons-kit';
import { Button } from '../../logIn/styles/logInFieldsStyles';
export const FilterWrapper = styled.div`
    width:100%;
    
`;
export const PriceFilterBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-bottom:15px;
    position:relative;

`;

export const ConfirmButton = styled(Button)`
            width:max-content;
            padding:5px 18px;
            position:absolute;
            right: 0;
            bottom:-2em;
            z-index:1;
`;

export const FilterForm = styled.form`
    display:flex;
    flex-direction:column;
    width:100%;
    padding: 15px 25px;
`;

export const InputPrice = styled.input`
    max-width: 45%;
    width:100%;
    padding:5px 5px;
    border:none;
    border: 1px solid #bfbfba;
    border-radius: 3px;
`;
export const CheckBox = styled.input`
    display:none;
`;
export const Label = styled.label`
    font-size:16px;
    position: relative;
    padding-left:15px;
    cursor:pointer;
    line-height:18px;
    display:flex;
    align-items:center;

    &::before{
        content:'';
        position:absolute;
        width:10px;
        height:10px;
        border:1px solid black;
        left:0;
    };
`;

export const CheckIcon = styled(Icon)`
    position:absolute;
    width:10px;
    height:10px;
    top:-2px;
    left:0;
`;

export const FilterTitle = styled.h1`
    padding-left:25px;
    padding-top:25px;
    font-size:16px;
`;