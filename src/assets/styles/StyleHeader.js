import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

export const HeaderContainer = styled.header`
    max-width: 1200px;
    margin: 0 auto;
  
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export const Logo = styled.img`
    width: 150px;
`;

export const Nav = styled.nav`
    display: flex;
`;

export const NavList = styled.ul`
    display: flex;
    gap: 2em;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const NavLink = styled.a`
    font-size: 20px;
    font-weight: bold;
    color: #2d4a43;
    text-transform: capitalize;
    letter-spacing: 2px;
    text-decoration: none;
    padding: 15px 0;
    border-bottom: 3px solid transparent;
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out, border-bottom 0.3s ease-in-out;

    &:hover {
        color: #123e35;
        transform: scale(1.1);
        border-bottom: 3px solid #123e35;
    }
`;

export const HamburgerIcon = styled(FaBars)`
    font-size: 1.8em;
    cursor: pointer;
    color: #2d4a43;
`;

export const CloseIcon = styled(FaTimes)`
    font-size: 1.8em;
    cursor: pointer;
    color: #2d4a43;
`;

export const MobileNav = styled.div`
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    max-width: 600px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.9); /* Slight transparency */
    z-index: 999;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            margin: 10px 0;
        }
    }
`;
