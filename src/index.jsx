// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import dbCities from './db/cities.js';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// Reducers
import citiesReducer from './reducers/city_reducer.js';

// State and reducers
const reducers = combineReducers({
  cities: citiesReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
