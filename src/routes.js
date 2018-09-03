import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './views/Register/Register'
import Home from './views/Home/Home'

export default() => (
    <BrowserRouter>
        <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/atendimentos'} exact component={Register}/>
        </Switch>
    </BrowserRouter>
)
