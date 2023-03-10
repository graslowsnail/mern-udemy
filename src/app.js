import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import MainNavigation from './shared/Navigation/MainNavigation';
import Users from './user/pages/Users.js';
import NewPlace from './places/pages/NewPlace.js';
import UpdatePlace from './places/pages/UpdatePlace';
import UserPlaces from './places/pages/UserPlaces';
import Auth from './user/pages/Auth';

const App = () => {

    return ( 
        <Router>
        <MainNavigation />
        <main>
            <Switch>
                <Route path='/' exact>
                    <Users/>
                </Route>
                <Route path ='/:userId/places' exact >
                    <UserPlaces />
                </Route>
                <Route path='/places/new' exact>
                    <NewPlace/>
                </Route>
                <Route path='/places/:placeId'>
                    <UpdatePlace/>
                </Route>
                <Route path='/auth'>
                    <Auth/>
                </Route>
                <Redirect to='/' />
            </Switch>
        </main>
        </Router>
    );
};

export default App;
