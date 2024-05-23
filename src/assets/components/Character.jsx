import { CharacterContainer, CharacterContent, CharacterTitle, CharacterDescription, CharacterButton } from '.././styles/StyleCharacter.js';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Character({ Title, Paragraph, ButtonText }) {
    return (
        <CharacterContainer>
            <CharacterContent>
                <CharacterTitle>{Title}</CharacterTitle>
                <CharacterDescription>{Paragraph}</CharacterDescription>
                {/* eslint-disable-next-line react/prop-types */}
                <Link to={`/characters/${Title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <CharacterButton>{ButtonText}</CharacterButton>
                </Link>
            </CharacterContent>
        </CharacterContainer>
    );
}
