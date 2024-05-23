import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #f9f9f9;
    width: 100%;
`;

export const Title = styled.h1`
    font-size: 2.5em;
    color: #333;
    margin-bottom: 20px;
`;

export const Paragraph = styled.p`
    font-size: 1.2em;
    color: #666;
    margin-bottom: 30px;
    text-align: center;
    max-width: 600px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #007bff;
    border: 2px solid black;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

export const ImageWrapper = styled.div`
    margin-top: 40px;
    width: 100%;
    max-width: 600px;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin-top: 20px;
`;

export const Input = styled.input`
    width: 500px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid ${props => (props.hasError ? 'red' : '#ccc')};
    border-radius: 5px;
    font-size: 1em;
    outline: ${props => (props.hasError ? 'red' : 'none')};

    &:focus {
        border-color: ${props => (props.hasError ? 'red' : '#007bff')};
    }
`;

export const TextArea = styled.textarea`
    width: 500px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid ${props => (props.hasError ? 'red' : '#ccc')};
    border-radius: 5px;
    font-size: 1em;
    resize: vertical;
    outline: ${props => (props.hasError ? 'red' : 'none')};

    &:focus {
        border-color: ${props => (props.hasError ? 'red' : '#007bff')};
    }
`;

export const InfoContainer = styled.div`
    text-align: left;
    margin-bottom: 30px;
    margin-top: 20px;
    max-width: 600px;
    width: 100%;
`;

export const InfoItem = styled.p`
    font-size: 1em;
    color: #333;
    margin-bottom: 10px;

    a {
        color: #007bff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const ErrorImage = styled.img`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
`;
