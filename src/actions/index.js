// TODO: add and export your own actions
import dbCities from '../db/cities.js';

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: dbCities
  }
}

export function selectCity(city) {
  return {
    type: 'SET_CITY',
    payload: city ? city : dbcities[0]
  }
}
