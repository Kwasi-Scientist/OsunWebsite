import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import OsunTokenSale from './OsunTokenSale';
//import Markets from './Markets';
//import DashboardContainer from './DashboardContainer';
//import OrderHistoryPage from './OrderHistoryPage';



class NavigationBar extends Component {
    render(){
        return(
      <Router>    
      <div className ="has-text-centered content">
        Osun DEX: 
        <ul >
        <Link to = "/">Home        </Link>
        <Link to = "/Markets">Markets        </Link>
        <Route path="/OsunTokenSale" component={OsunTokenSale}/>
        <Link to = "/OsunTokenSale">Token Sale</Link>
        </ul>
    </div>
    </Router>
        );
    };
}
export default NavigationBar;
