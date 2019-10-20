import styled from 'styled-components';

export const Form = styled.form`
    display:flex;
`;

export const Input = styled.input`
    flex:1;
    padding:5px 15px;
    outline:none;
    border-radius:3px 0 0 3px;
    border:1px solid #bfbfba;
    border-right:none;
`;

export const Button = styled.button`
    width: 20%;
    border:none;
    border:1px solid #bfbfba;
    background:#fafcff;
    border-radius:0 3px 3px 0;
    padding:7px 15px;
    font-weight:bold;
    font-size:14px;
    color:#000;
    cursor:pointer;
`;