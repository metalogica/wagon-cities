// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import dbCities from './db/cities.js';
//middleware
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// Reducers
import citiesReducer from './reducers/city_reducer.js';
import selectCityReducer from './reducers/select_city_reducer.js';

// State and reducers
const reducers = combineReducers({
  cities: citiesReducer,
  activeCity: selectCityReducer
});

// Middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(logger, reduxPromise))

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, middleware)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
