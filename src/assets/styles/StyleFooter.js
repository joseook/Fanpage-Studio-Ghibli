import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #2d4a43;
    padding: 20px 0;
    color: #fff;
    text-align: center;
    position: static;
    bottom: 0;
    width: 100%;
`;

export const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FooterNav = styled.nav`
    margin-top: 10px;
`;

export const FooterNavItem = styled.li`
    display: inline;
    margin: 0 15px;
    font-size: 18px;

    a {
        color: #fff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;
