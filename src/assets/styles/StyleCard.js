import styled from 'styled-components';

export const CardContainer = styled.div`
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin: 16px;
    width: 300px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 400px;
    max-height: 300px;
`;

export const CardContent = styled.div`
    padding: 16px;
`;

export const CardTitle = styled.h2`
    font-size: 1.5em;
    margin: 0;
    color: #333;
`;

export const CardDescription = styled.p`
    font-size: 1em;
    color: #777;
    margin-top: 8px;
`;

export const CardButton = styled.button`
    margin-top: 12px;
    padding: 8px 16px;
    font-size: 1em;
    color: white;
    background-color: #007BFF;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;
