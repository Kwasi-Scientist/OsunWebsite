import styled from 'styled-components';
import { Link } from 'react-router-dom';
import osun from '../../images/Osun.png';
import { Container } from '../../globalstyles';

export const Nav = styled.nav`
background : #101522;//#282c34;//rgb(35, 31,32);//; //rgb(10, 10, 10);
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top:0;
z-index:999;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content:space-between;
height: 80px;

${Container}
`;

export const NavLogo = styled(Link)`
color: #ffff;
justify-self: flex-start;
cursor: pointer;
font-size: 2rem;
display: flex;
align-items: center;
`;
export const NavIcon = styled.div`
background-image: url(${osun});
margin-right: 0.5rem;

`;
export const MobileIcon = styled.div`

    display: none;

    @media screen and (max-width: 960px){
        display:block;
        position: absolute;
        top: 0;
        right:0 ;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
//text-decoration: none;
text-align: center;
/* display: flex;
        flex-direction: column;
        width: 100px;
        height: 500px;
        top: 80px;
        left: -100%;
        opacity:1;
        transition: all 0.5s ease; */

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        //list-style: none;
        height: 90vh;
        top: 80px;
        //right: -100%;
        right: ${({click}) => (click ? 0 : '-100%')};
        opacity:1;
        //transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: all 0.5s ease;
        background: #101522; //rgb(35, 31,32);//
    }
`;

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

@media screen and (max-width: 960px){
    //visibility: hidden;
   // display: block;
    position: relative;
    width: 100%;
    //top:0;
    //right:0;
    //transform: translate(-100%, 60%);
    //font-size:1.8rem;
    //cursor: pointer;
}

&:hover {
    border-bottom: 2px solid #4b59f7;
}
`;

export const NavLinks = styled(Link)`
color: #fff;
display:flex;
align-items: center;
text-decoration: none;
padding:0.5rem 1rem;
height: 100%;

@media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
        color:#4b59f7;
        transition: all 0.3s ease;
    }
}
`;

export const NavItemBtn = styled.li`
@media screen and (max-width: 960){
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px
}

`;

export const NavBtnLink= styled(Link)`
    display: flex;
    justify-content:center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;

`;