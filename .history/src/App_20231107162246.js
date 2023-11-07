
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import AboutUs from './components/AboutUs/AboutUs';
import Clients from './components/Clients/Clients';
import MainPage from './components/MainPage/MainPage';
import Numbers from './components/Numbers/Numbers';
import Partners from './components/Partners/Partners';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> About Us </Link></li>
          <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={AboutUs} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
