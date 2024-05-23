// StyleAboutPerson.js
import styled from 'styled-components';

export const AboutPersonContainer = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
`;

export const PersonImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 300px;
    border-radius: 10px;
`;

export const PersonTitle = styled.h1`
    font-size: 2.5em;
    margin-top: 20px;
`;

export const PersonDescription = styled.p`
    font-size: 1.2em;
    margin-top: 10px;
    line-height: 1.6;
`;

export const PersonHistory = styled.p`
    font-size: 1.2em;
    margin-top: 20px;
    line-height: 1.6;
    text-align: left;
`;

export const PersonStatus = styled.p`
    font-size: 1.2em;
    margin-top: 10px;
    line-height: 1.6;
    text-align: left;
    color: ${props => (props.children.includes('Deceased') ? 'red' : 'green')};
`;
