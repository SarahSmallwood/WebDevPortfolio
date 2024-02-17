import {Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ContactForm from './pages/ContactForm/ContactForm';
import Travel from './pages/Travel/Travel';
import AboutMe from './pages/AboutMe/AboutMe';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Skills from './pages/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <br/>
      <AboutMe />
      <Skills />
      <br/>
      <Portfolio />
      <br/>
      <ContactForm />
      <br/>
      <Footer />
      <Routes>
      <Route path='/travel' element={<Travel />} />
      </Routes>
      
    </div>
  );
}

export default App;
