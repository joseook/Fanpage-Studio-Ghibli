// NotFound.jsx
import React from 'react';
import {Container, Title, Message, Button, Image} from '.././styles/StyleNotFound.js';
import ErrorFire from '../img/error404.jpg';

export default function NotFound() {
    return (
        <Container>
            <Title>404 - Page Not a Found </Title>
                <Message>
                    Oops! It looks like you've gotten lost in the animated castle. Let's go back to homepage security.
                </Message>
                <Button onClick={() => window.location.href = '/'}>Go Home</Button>
                <Image src={ErrorFire} alt="Howl do Castelo Animado"/>
        </Container>
);
}
