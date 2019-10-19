import styled, { keyframes } from 'styled-components';

const animations = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
export const PopUpWrapper = styled.div`
    width: 100%;
    position: absolute;
    top: 39px;
    right: 0;
    border: 1px solid #7e899f;
    text-align:center;
    display:flex;
    flex-direction:column;
    box-shadow: 0 0 4px black;
    background:rgba(218, 229, 242, .4);
    animation: ${animations} .4s linear;
    border-radius:0 0 5px 5px;
`;