import { FooterContainer, FooterContent, FooterNav, FooterNavItem } from '.././styles/StyleFooter.js';

// eslint-disable-next-line react/prop-types
export default function Footer({ ContainerStyle, Paragraph, NavLinks }) {
    return (
        <FooterContainer className={ContainerStyle}>
            <FooterContent>
                <p>{Paragraph}</p>
                <FooterNav>
                    <ul>

                        {NavLinks && NavLinks.length > 0 ? (
                            NavLinks.map((link, index) => (
                                <FooterNavItem key={index}>{link}</FooterNavItem>
                            ))
                        ) : (
                            <li>No links available</li>
                        )}
                    </ul>
                </FooterNav>
            </FooterContent>
        </FooterContainer>
    );
}
