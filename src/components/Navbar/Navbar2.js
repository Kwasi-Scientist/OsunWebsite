import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavItem, NavMenu, NavLinks,
NavItemBtn, NavBtnLink } from './Navbar.elements';
import {Button } from '../../globalstyles';
import osun from '../../images/Osun.png';
import { IconContext} from 'react-icons/lib';
import Home from '../pages/Home';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [button, setButton] = useState(true);

const toggle = () => setIsOpen(!isOpen);

const hide = () => setIsOpen(false);

const handleClick = () => setClick(!click);

// const toggleShow = () => {
//     this.setState({show: !this.state.show})
// }
//const toggleShow = () => setClick(!show)

// const toggleShow = () => {
//     if (window.innerwidth <= 960){
//         showMenu(false)
//     } else {
//         showMenu(true)
//     }
// }


const showButton = () => {
    if (window.innerWidth <=960){
        setButton(false)
    } else { 
        setButton(true)
    }
};
const closeMobileMenu = () => setClick(false);

useEffect(() => {
    showButton();
    //toggleShow()
}, []);

window.addEventListener('resize', showButton);
//window.addEventListener('resize', toggleShow);
    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to ="/">
                    <NavIcon />
                    Osun Swap
                </NavLogo>
                <MobileIcon onClick={handleClick} onBlur={hide} >
                    {click ? < FaTimes/> : <FaBars/>}
                    </MobileIcon>
                <NavMenu onClick={handleClick} click ={click}>
                    <NavItem>
                        <NavLinks to = '/' onClick={closeMobileMenu}>
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = '/services' onClick={closeMobileMenu}>
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = '/AboutUs' onClick={closeMobileMenu}>
                            About us
                        </NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to ='/sign-up'>
                                <Button primary> Connect Wallet </Button>
                            </NavBtnLink>
                        ) : (
                            <NavBtnLink to='/sign-up'>
                                <Button onClick={closeMobileMenu} fontBig primary>
                                    Connect Wallet
                                </Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
                </NavMenu>     
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;