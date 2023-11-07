
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Header/>
    <MainPage/>
    <AboutUs/>
    <Services/>
    <Numbers/>

    <ClientAndPartners/>


    {/* <Clients/> */}
    {/* <Partners/> */}


    <Projects/>
    <Contact/>
    </div>
  );
}

export default App;
