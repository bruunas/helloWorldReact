import React from 'react';
import ReactDOM from 'react-dom';
import './App.sass';
import Footer from './components/Footer/Footer'
import Routes from './routes'

import registerServiceWorker from './registerServiceWorker';
import './database.js';


ReactDOM.render(
    <div>
    <Routes />
    <Footer developer="Bruna Santos"/>
    </div>
    , document.getElementById('root'),
);

registerServiceWorker();