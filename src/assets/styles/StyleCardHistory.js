import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 300px;
    margin: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05);
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

export const CardContent = styled.div`
    padding: 25px;
    max-height: 300px;
`;

export const CardTitle = styled.h3`
    font-size: 1.5em;
    margin-bottom: 10px;
`;

export const CardDescription = styled.p`
    font-size: 1em;
    color: #666;
`;

export const CardButton = styled.button `
    width: 230px;
    height: 30px;
    padding: 4px;
    font-size: 15px;
    
`

export const Link = styled.a`
    color: white;
`