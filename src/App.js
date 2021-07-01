import React, { useEffect, useState } from 'react';
import {Link, BrowserRouter,Route} from 'react-router-dom';
import Feedback from './Screens/Feedback';
import AboutUs from './Screens/AboutUs';
import HomeScreen from './Screens/HomeScreen';
import CriptSearch from './Screens/CriptSearch';

function App() {
  const [year, setYear] = useState('')
  
  useEffect(()=>{
    const data = new Date()
    setYear(data.getFullYear())
  }, [])

  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            <div>
                <Link to="/"><img className="small" src="images/logo.png" alt="Logo"/></Link>
            </div>
            <div>
                <Link to="/">Página Inicial</Link>
                &nbsp;
                &nbsp;
                <div className="dropdown">
                <Link to="#">Opções &nbsp; <i  className="fa fa-caret-down"></i></Link>
                <ul className="dropdown-content">
                  <li><Link to="/cript-list">Listar&nbsp;criptomoedas</Link></li>
                  <li><Link to="/about-us">Sobre nós</Link></li>
                  <li><Link to="/feedback">Feedback</Link></li>
                </ul>
              </div>
            </div>
        </header>
        <main>
          <Route path="/feedback" component={Feedback}></Route>
          <Route path="/about-us" component={AboutUs}></Route>
          <Route path="/cript-list" component={CriptSearch}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer>
            Marcos André {year}&copy;
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
