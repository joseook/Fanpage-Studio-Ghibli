import styled from 'styled-components';

export const HomeContainer = styled.section`
    max-width: 1200px;
    margin: 5em auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2em;
    text-align: center;

    h1 {
        font-size: 70px;
        font-weight: bold;
        letter-spacing: 2px;
    }
    
    p {
        font-size: 20px;
        margin: 1em;
        font-weight: lighter;
    }
    
    button {
        width: 200px;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: #123e35;
        color: white;
        font-weight: bold;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        transform: scale(1);
        font-size: 15px;

        &:hover {
            background-color: darkred;
            transform: scale(1.1);
        }
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 20px;
`;




export const InfoHistoryContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
`;
