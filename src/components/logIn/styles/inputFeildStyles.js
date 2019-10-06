import styled, {css} from 'styled-components';

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:0 auto;
    max-width: 50vw;
    
    
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
    
`;

export const Title = styled.div`
    font-size:24px;
    font-family:'Times New Roman', Times, serif;
    width:100%;
    text-align:center;
    padding-bottom:1em;
`