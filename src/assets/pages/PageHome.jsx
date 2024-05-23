import Home from '../components/Home.jsx';
import data from '../../data.json';

export default function HomePage() {
    return (
        <Home
            Title="Castelo Animado"
            Paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officiis?"
            ButtonText="Get Started"
            characters={data.characters}
            infoHistory={data.infoHistory}
        />
    );
}
