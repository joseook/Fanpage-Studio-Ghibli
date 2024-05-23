// contact.jsx
import { useState } from 'react';
import { Title, Paragraph, Button, Form, Input, TextArea, InfoContainer, InfoItem, ErrorImage } from '../styles/StyleContact.js';
import errorIcon from '../img/icon-error.svg';

export default function Contact({ Title: title, Paragraph: paragraph, ButtonText: buttonText }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!name) newErrors.name = true;
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = true;
        if (!message) newErrors.message = true;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully');
        } else {
            alert('Form has errors');
        }
    };

    return (
        <div>
            <Title>{title}</Title>
            <Paragraph>{paragraph}</Paragraph>
            <InfoContainer>
                <InfoItem>Address: Street Example, 123, Example Neighborhood, City, State</InfoItem>
                <InfoItem>Telephone: (11) 1234-5678</InfoItem>
                <InfoItem>Email: contato@exemplo.com</InfoItem>
                <InfoItem>
                    Social Media:
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
                </InfoItem>
            </InfoContainer>
            <Form onSubmit={handleSubmit}>
                <div style={{ position: 'relative' }}>
                    <Input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        hasError={errors.name}
                        required
                    />
                    {errors.name && <ErrorImage src={errorIcon} alt="Error" />}
                </div>
                <div style={{ position: 'relative' }}>
                    <Input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        hasError={errors.email}
                        required
                    />
                    {errors.email && <ErrorImage src={errorIcon} alt="Error" />}
                </div>
                <div style={{ position: 'relative' }}>
                    <TextArea
                        rows="5"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        hasError={errors.message}
                        required
                    />
                    {errors.message && <ErrorImage src={errorIcon} alt="Error" />}
                </div>
                <Button type="submit">{buttonText}</Button>
            </Form>
        </div>
    );
}
