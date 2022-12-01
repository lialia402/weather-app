import React from 'react'
import './CurrentWeather.css'

const CurrentWeather = ({ data }) => {
    console.log(data);
    return (
        <div className="weather">
            <div className="left">
                <p className="city">{data.city}</p>
                <p className="weather-description">{data.weather[0].description}</p>
                <div className='description'>
                    <img
                        alt="weather"
                        className="weather-icon"
                        src={`icons/${data.weather[0].icon}.png`}
                    />
                    <p className="temperature">{Math.round(data.main.temp)}°C</p>

                </div>
            </div>
            <div className="right">
                <div className="details">
                    <div className="parameter-box">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">
                            {Math.round(data.main.feels_like)}°C
                        </span>
                    </div>
                    <div className="parameter-box">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-box">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-box">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather