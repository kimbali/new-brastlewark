import React from 'react'
import { Switch, Route } from 'wouter';
import useInitFetch from './hooks/useInitFetch';
import Landing from './pages/Landing';
import Browser from './pages/Browser';
import GnomeDetails from './pages/GnomeDetails';
import ErrorPage from './pages/404';



function App() {
    useInitFetch();

    return (
      <div className="App">
          <Switch>
            <Route path="/" component={Landing}/>
            <Route path="/search" component={Browser}/>
            <Route path="/gnome/:id" component={GnomeDetails}/>
            <Route component={ErrorPage}/>
          </Switch>
      </div>
    );
}

export default App;
