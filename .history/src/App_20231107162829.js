
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AboutUs from './components/AboutUs/AboutUs';
import Clients from './components/Clients/Clients';
import MainPage from './components/MainPage/MainPage';
import Numbers from './components/Numbers/Numbers';
import Partners from './components/Partners/Partners';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';

function App() {
  return (
    <Header>
    <MainPage/>
    <AboutUs/>
    <Services/>
    <Numbers/>
    <Clients/>
    <Partners/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
