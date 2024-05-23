// StylePageNotFound.js
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f8ff;
    padding: 20px;
`;

export const Title = styled.h1`
    font-size: 3em;
    color: #2c3e50;
    margin-bottom: 20px;
`;

export const Message = styled.p`
    font-size: 1.5em;
    color: #34495e;
    text-align: center;
    margin-bottom: 30px;
    max-width: 600px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 1.2em;
    color: #fff;
    background-color: #3498db;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #2980b9;
    }
`;

export const Image = styled.img`
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 10px;
    margin-top: 20px;
`;
