import React, { Component } from 'react';

class City extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.selectCity(this.props.name)
  }

  render () {
    if (!this.props.selectedCity) {
      return (
        <div className="list-group-item" onClick={this.handleClick}>
          <h5>{this.props.name}</h5>
        </div>
      )
    } else {
      return (
        <div className="active-city">
          <h5>{this.props.selectedCity.name}</h5>
          <p>{this.props.selectedCity.address}</p>
          <a>{this.props.selectedCity.slug}</a>
        </div>
      )
    }
  }
}

export default City;
