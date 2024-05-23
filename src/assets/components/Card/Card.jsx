
import { CardContainer, CardImage, CardContent, CardTitle, CardDescription, CardButton } from '../.././styles/StyleCard.js';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Card({ TitlePerson, AboutPerson, Img }) {
    return (
        <CardContainer>
            <CardImage src={Img} alt={TitlePerson} />
            <CardContent>
                <CardTitle>{TitlePerson}</CardTitle>
                <CardDescription>{AboutPerson}</CardDescription>
                <Link to="/characters">
                    <CardButton>Learn More</CardButton>
                </Link>
            </CardContent>
        </CardContainer>
    );
}
