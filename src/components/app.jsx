import React, { Component } from 'react';
import CityList from '../containers/city_list.jsx';
import City from '../containers/city.jsx';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { selectCity() }
import dbCities from '../db/cities.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: dbCities,
      selectedCity: dbCities[0]
    }
  }

  selectCity = (name) => {
    const newCity = this.state.cities.filter( city => city.name === name)[0]
    this.setState({
      selectedCity: newCity
    })
  }

  render() {
    return (
      <div className="app">
        <CityList cities={this.state.cities} selectCity={this.selectCity}/>
        <City selectedCity={this.state.selectedCity}/>
      </div>
    )
  }
}

export default App;
