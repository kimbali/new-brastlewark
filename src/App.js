import React from 'react'
import { Switch, Redirect, Route } from 'wouter';
import './App.css';
import useInitFetch from './components/hooks/useInitFetch';
import Landing from './pages/Landing';
import Browser from './pages/Browser';
import GnomeDetails from './pages/GnomeDetails';


function App() {
    useInitFetch();

    return (
      <div className="App">
        <section className="App-content">
          <Switch>
            <Route path="/" component={Landing}/>
            <Route path="/search" component={Browser}/>
            <Route path="/gnome/:id" component={GnomeDetails}/>
            <Redirect to="/search"/>
          </Switch>
        </section>
      </div>
    );
}

export default App;
