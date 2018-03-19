//dependencias
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//componentes
import App from './Components/App';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Page404 from './Components/Page404';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/" conponent="{Home}" />
            <Route path="/About" conponent="{About}" />
            <Route path="/Contact" conponent="{Contact}" />
            <Route conponent="{Page404}" />
        </Switch>
    </App>

export default AppRoutes;