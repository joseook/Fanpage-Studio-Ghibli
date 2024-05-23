// AboutPerson.jsx
import { useParams } from 'react-router-dom';
import data from '../../data.json';
import NotFoundPerson from "../components/PersonNotFound.jsx";
import { AboutPersonContainer, PersonImage, PersonTitle, PersonDescription, PersonHistory, PersonStatus } from '.././styles/StyleAboutPerson.js';

export default function AboutPerson() {
    const { personName } = useParams();
    const person = data.characters.find(character => character.TitlePerson.toLowerCase().replace(/\s+/g, '-') === personName);

    if (!person) {
        return  <NotFoundPerson />
    }

    return (
        <AboutPersonContainer>
            <PersonImage src={person.Img} alt={person.TitlePerson} />
            <PersonTitle>{person.TitlePerson}</PersonTitle>
            <PersonDescription>{person.AboutPerson}</PersonDescription>
            <PersonHistory><strong>History:</strong> {person.History}</PersonHistory>
            <PersonStatus><strong>Status:</strong> {person.Status}</PersonStatus>
        </AboutPersonContainer>
    );
}
