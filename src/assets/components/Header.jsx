import { useState, useEffect } from 'react';

import {
    HeaderContainer,
    Logo,
    Nav,
    NavList,
    NavLink,
    HamburgerIcon,
    CloseIcon,
    MobileNav
} from '.././styles/StyleHeader.js';
import LogoImage from '../img/logo.png';

export default function Header({ links }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isOpen, setIsOpen] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeaderContainer>
            <a href="/"><Logo src={LogoImage} alt="Logo" /></a>
            {isMobile ? (
                <>
                    {isOpen ? (
                        <CloseIcon onClick={toggleMenu} />
                    ) : (
                        <HamburgerIcon onClick={toggleMenu} />
                    )}
                    <MobileNav isOpen={isOpen}>
                        <NavList>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} onClick={toggleMenu}>
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </NavList>
                    </MobileNav>
                </>
            ) : (
                <Nav>
                    <NavList>
                        {links.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path}>{link.name}</NavLink>
                            </li>
                        ))}
                    </NavList>
                </Nav>
            )}
        </HeaderContainer>
    );
}
