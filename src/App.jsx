import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './assets/././pages/PageHome.jsx';
import Character from './assets/././pages/PageCharacter.jsx';
import AboutPerson from "./assets/././pages/AboutPerson.jsx";
import Header from './assets/components/Header.jsx';
import Footer from './assets/components/Footer.jsx';
import ContactPage from './assets/./pages/PageContact.jsx';
import PageNotFound from './assets/./pages/PageNotFound.jsx';
import './index.css';

function App() {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Characters', path: '/characters' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <BrowserRouter>
            <Header links={navLinks} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/characters" element={<Character />} />
                <Route path="/characters/:personName" element={<AboutPerson />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer
                ContainerStyle="footerContainer"
                Paragraph="© Joseook. All rights reserved."
                NavLinks={[
                    <li key="home"><a href="/">Home</a></li>,
                    <li key="characters"><a href="/characters">Characters</a></li>,
                    <li key="contact"><a href="/contact">Contact</a></li>
                ]}
            />
        </BrowserRouter>
    );
}

export default App;
