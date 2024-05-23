// PageContact.jsx
import { useState, useEffect } from 'react';
import Contact from '../components/Contact.jsx';
import { Container, ImageWrapper, Image } from '.././styles/StyleContact.js';
import ImgFooter from '../img/contact.jpg';

export default function PageContact() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

    const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container>
            <Contact
                Title="Contact Us"
                Paragraph="If you have any questions or need support, please fill out the form below."
                ButtonText="Submit"
            />
            {isLargeScreen && (
                <ImageWrapper>
                    <Image src={ImgFooter} alt="Support Contact" />
                </ImageWrapper>
            )}
        </Container>
    );
}
