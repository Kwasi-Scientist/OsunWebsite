import logo from './logo.svg';
import osun from './images/Osun.png'
import './App.css';
import GlobalStyles from './globalstyles'
//import NavigationBar from "./components/NavigationBar";
import Description from "./components/Description";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar2 from "./components/Navbar/Navbar2";
import { Button } from "./components/Button";
import Home from "./components/pages/Home";
import Footer from './components/footer/Footer';

//import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <img src={osun} className="App-logo" alt="logo" />
        <GlobalStyles />
        <Navbar2 />
        <Switch>
          <Route path='/' exact component={Home}/>     
        </Switch>
        <Footer />
        
        
        <Description />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Router>
  );
}

export default App;
