import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';



export const NavWrapper = styled.div`
    width:100%;
    height:55px;
    background:#26205c;
    display:grid;
    padding: 0 5vw;
    grid-template-columns: 1fr 1fr 4fr 1fr;
    align-items:center;
`;

export const LinksWrapper = styled.div`
    display:flex;
    align-items:flex-end;
    justify-content:space-around;
    position:relative;
`;

export const Links = styled(Link).attrs(props => ({
        padding: props.padding && '7px'
    }))`
    text-decoration:none;
    font-size: 14px;
    color: ${props => props.color || '#e7e6ed'};
    text-transform:uppercase;
    padding-top: ${props => props.padding};
    cursor:pointer;
`;

export const Logo = styled(Link)`
    color:#e7e6ed;
    font-size:18px;
    text-decoration:none;
   
`;

export const StyledIcon = styled(Icon)`
    color: #e7e6ed;
    cursor:pointer;
`;