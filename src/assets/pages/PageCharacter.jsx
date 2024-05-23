// PageCharacter.jsx
import Character from '../components/Character.jsx';
import data from '../../data.json';
import { PageCharacterContainer, PageTitle } from '.././styles/StylePageCharacter.js';

export default function PageCharacter() {
    const characters = data.characters;

    return (
        <PageCharacterContainer>
            <PageTitle>Characters</PageTitle>
            {characters.map((character, index) => (
                <Character
                    key={index}
                    Title={character.TitlePerson}
                    Paragraph={character.AboutPerson}
                    ButtonText="Learn More"
                    ContainerStyle="character-container"
                />
            ))}
        </PageCharacterContainer>
    );
}
