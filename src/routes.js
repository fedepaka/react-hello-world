//dependencias
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//componentes
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/" conponent={Home} />
            <Route path="/About" conponent={About} />
            <Route path="/Contact" conponent={Contact} />
            <Route conponent={Page404} />
        </Switch>
    </App>

export default AppRoutes;