
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs/AboutUs';
import MainPage from './components/MainPage/MainPage';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import SwiperComponent from './components/Services/Swiper'



function App() {
  return (
    <div style={{ backgroundColor: '#2E303E', minHeight: '100vh' }}>
    <Header/>
    <MainPage/>
    <AboutUs/>
    <Services/>
    <SwiperComponent/>
    <Contact/>
    </div>
  );
}

export default App;
