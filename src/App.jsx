import {Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ContactForm from './pages/ContactForm';
import Travel from './pages/Travel/Travel';
import AboutMe from './pages/AboutMe/AboutMe';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <AboutMe />
      <Travel />
      
    </div>
  );
}

export default App;
