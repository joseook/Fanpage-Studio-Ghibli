// NotFound.jsx
import React from 'react';
import {Container, Title, Message, Button, Image} from '.././styles/StyleNotFound.js';
import ErrorFire from '../img/oxi.jpg';

export default function NotFoundPerson() {
    return (
        <Container>
            <Title>404 - Person Not a Found </Title>
            <Message>
                Oops! It looks like you've gotten lost in the animated castle. Let's go back to homepage security.
            </Message>
            <Button onClick={() => window.location.href = '/character'}>Go Character</Button>
            <Image src={ErrorFire} alt="Error"/>
        </Container>
    );
}
