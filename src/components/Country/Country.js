import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population, area, status, region, startOfWeek, subregion, flags, capital} =props.country
    return (
        <div className='rest-country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Status: {status}</p>
            <p>Region: {region}</p>
            <p>Start Of Week: {startOfWeek}</p>
            <p>Subregion: {subregion}</p>
            
        </div>
    );
};

export default Country;