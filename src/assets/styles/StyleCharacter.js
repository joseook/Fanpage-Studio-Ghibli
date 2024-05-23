import styled from 'styled-components';

export const CharacterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px;
    padding: 20px;
    transition: transform 0.3s;
    
    &:hover {
        transform: scale(1.05);
    }
`;

export const CharacterContent = styled.div`
    text-align: center;
`;

export const CharacterTitle = styled.h2`
    font-size: 1.8em;
    margin-bottom: 10px;
`;

export const CharacterDescription = styled.p`
    font-size: 1em;
    color: #666;
    margin-bottom: 20px;
`;

export const CharacterButton = styled.button`
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;
