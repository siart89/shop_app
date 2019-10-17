import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import {Icon} from 'react-icons-kit';


export const Wrapper = styled.div`
    height:100vh;
    max-width:1480px;
    width:100%;
    background: rgba(218, 229, 242, .4);
    padding-top:200px;
    top:55px;
    position:fixed;
    overflow-y:hidden;
`;

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:0 auto;
    max-width: 50%;    
    position:relative;
    padding-top:15px;
`;

const Animations = keyframes`
    from {
        box-shadow: 2px 2px 4px #838587;
    }
    to {
        box-shadow: 0px 0px 0px #838587;
    }
`;


export const Input = styled.input.attrs(props => ({
    type: props.type,
}))`
    border:none;
    color:#66686b;
    font-family:sans-serif;
    border:1px solid #bfbfba;
    width:40%;
    border-radius:3px;
    padding:7px 15px; 
    ${props => props.secondary && css`
        margin-top:0.5em;
    ` };
    font-size:14px;
    transition:box-shadow 0.3s ease-in;

    &:hover{
        animation: ${Animations} 1.0s linear;
    };
`;

export const Button = styled.button`
    border:none;
    border:1px solid #bfbfba;
    background:#8db9f2;
    border-radius:3px;
    width:15%;
    padding:7px 15px;
    margin-top:0.5em;
    font-weight:bold;
    font-size:14px;
    color:#fff;
    cursor:pointer;
    transition: background .5s ease;

    &:hover{
        background:#609ceb;
    }
    
`;

export const Title = styled.div`
    font-size:24px;
    font-family:'Times New Roman', Times, serif;
    width:100%;
    text-align:center;
    padding-bottom:1em;
`
export const ErrMessage = styled.div`
    position:absolute;
    top:-10px;
    text-align:center;
    color:#eb385c;
    font-size:12px;
    font-weight:bold;
`

export const CloseButton = styled(Link)`
    position: absolute;
    right: 5vh;
    top: 2vh;
    text-decoration:none; 
`;

export const Icons = styled(Icon)`
    font-size:18px;
    color:#000;
`;