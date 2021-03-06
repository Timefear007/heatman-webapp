import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { setGlobal } from "reactn";

setGlobal({
    state: {
        DHT11_1: true,
        DHT11_2: true,
        DHT11_avg: true
    },
    unit:"Celsius",
    dangerousTemperature:20,
    dangerousHumidity:25,
    dangerous:false
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
