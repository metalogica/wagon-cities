import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCity } from '../actions/index.js';

class ActiveCity extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // Will set the initial active city to the first in the cities list unless a active city is present
    const city = (this.props.activeCity.name != null ) ? this.props.activeCity : this.props.cities[0];
    const url = `url('https://kitt.lewagon.com/placeholder/cities/${city.slug}'`

    return(
      <div className="active-city" style={{backgroundImage: url}}>
        <h5>{city.name}</h5>
        <p>{city.address}</p>
        <a>{city.slug}</a>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity,
    cities: state.cities
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCity);
