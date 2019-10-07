import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.div`
    width:100vw;
    height:7vh;
    background:#26205c;
    display:grid;
    padding: 0 5vw;
    grid-template-columns: 1fr 1fr 4fr 1fr;
    align-items:center;
`;

export const LinksWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
`;
export const Links = styled(Link)`
    text-decoration:none;
    font-size: 14px;
    color: #e7e6ed;
    text-transform:uppercase;
`;

export const Logo = styled(Link)`
    color:#e7e6ed;
    font-size:18px;
    text-decoration:none;
   
`