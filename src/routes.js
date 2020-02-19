import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App';
import Sobre from './Sobre';
import Profile from './Profile'

function Routes() {

return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/sobre" component={Sobre} />
            <Route exact path="/profile/:id" component={Profile} />
        </Switch>
    </ BrowserRouter>
)

}
export default Routes;