import React from 'react';
import Card from '../components/Card/Card.jsx';
import CardAboutHistory from '../components/Card/CardAboutHistory.jsx';
import About from "./About.jsx";
import data from '../../data.json';
import { HomeContainer, CardsContainer, InfoHistoryContainer } from '.././styles/StyleHome.js';

// eslint-disable-next-line react/prop-types
export default function Home({ Title, Paragraph, ButtonText }) {
    const characters = data.characters.slice(0, 4);
    const infoHistory = data.infoHistory;

    return (
        <HomeContainer>
            <div>
                <h1>{Title}</h1>
                <p className='paragraph-title'>{Paragraph}</p>
                <button>{ButtonText}</button>
            </div>

            <CardsContainer>
                {characters.map((character, index) => (
                    <Card
                        key={index}
                        TitlePerson={character.TitlePerson}
                        AboutPerson={character.AboutPerson}
                        Img={character.Img}
                    />
                ))}
            </CardsContainer>

            <About />

            <InfoHistoryContainer>
                <div>
                    <h1>Movies of the Studio Ghibli</h1>
                </div>
                {infoHistory.map((info, index) => (
                    <CardAboutHistory
                        key={index}
                        Title={info.Title}
                        Description={info.Description}
                        TextButton={info.Text}
                        Img={info.Img}
                    />
                ))}
            </InfoHistoryContainer>
        </HomeContainer>
    );
}
