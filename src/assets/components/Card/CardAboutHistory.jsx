import {
    CardContainer,
    CardImage,
    CardContent,
    CardTitle,
    CardDescription,
    CardButton,
    Link,
} from '../.././styles/StyleCardHistory.js';

// eslint-disable-next-line react/prop-types
export default function CardAboutHistory({Title, Description, Img, TextButton}) {
    return (
        <CardContainer>
            <CardImage src={Img} alt={Title}/>
            <CardContent>
                <CardTitle>{Title}</CardTitle>
                <CardDescription>{Description}</CardDescription>
                <CardButton><Link href="https://studioghibli.com.br/filmografia/"
                                  target="_blank"> {TextButton}</Link></CardButton>
            </CardContent>
        </CardContainer>
    );
}
