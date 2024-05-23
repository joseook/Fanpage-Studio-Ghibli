import { AboutSection, Title, Paragraph } from '.././styles/StyleAbout.js';

export default function About() {
    return (
        <AboutSection>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Title>About Howl's Moving Castle</Title>
            <Paragraph>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Howl's Moving Castle is a 2004 Japanese animated fantasy film written and directed by Hayao Miyazaki. The film is based on the novel of the same name by British author Diana Wynne Jones. It tells the story of a young woman named Sophie who is turned into an old woman by a witch's curse and her adventures with a wizard named Howl and his moving castle.
            </Paragraph>
        </AboutSection>
    );
}
