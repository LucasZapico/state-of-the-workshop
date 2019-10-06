import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Components/layout/Nav.js';
import PublicSite from './Components/public-site/PublicSite.js';
import SignIn from './Components/auth/Signin.js';
import AddItem from './Components/items/AddItem.js';
import Footer from './Components/layout/Footer.js';
import About from './Components/pages/About.js';
import ItemDetails from './Components/public-site/ItemDetails.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={PublicSite} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/additem" component={AddItem} />
            <Route exact path="/about" component={About} />
            <Route exact path="/item/:id" component={ItemDetails}/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
