import React, { Component } from 'react';
import City from './city.jsx';

const CityList = (props) => {
  return (
    <div className="city-list">
    {props.cities.map( (city,index) => {
      return <City key={index+1}
            name={city.name}
            address={city.address}
            slug={city.slug}
            selectCity={props.selectCity}/>
    })}
    </div>
  )
}

export default CityList;
