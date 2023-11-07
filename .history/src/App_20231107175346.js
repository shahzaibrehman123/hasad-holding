
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition } from 'react-transition-group';

import AboutUs from './components/AboutUs/AboutUs';
// import Clients from './components/Clients/Clients';
import MainPage from './components/MainPage/MainPage';
import Numbers from './components/Numbers/Numbers';
// import Partners from './components/Partners/Partners';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import ClientAndPartners from './components/ClientAndPartners/ClientAndPartners';

function App() {
  return (
    <div style={{ backgroundColor: '#1b1d1e', minHeight: '100vh' }}>
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <Header/>
    </CSSTransition>
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <MainPage/>
    </CSSTransition>
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <AboutUs/>
    </CSSTransition>
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <Services/>
    </CSSTransition>
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <Numbers/>
    </CSSTransition>
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <ClientAndPartners/>
    </CSSTransition>


    {/* <Clients/> */}
    {/* <Partners/> */}


    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <Projects/>
    </CSSTransition>
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <Contact/>
    </CSSTransition>
    </div>
  );
}

export default App;
