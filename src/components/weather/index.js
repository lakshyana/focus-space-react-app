import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from 'react';

//import thunks
import {getWeatherByLocationThunk } from "./weather-thunks";

const Weather = () => {
  //useSelector
  const {weather, loading} = useSelector(state => state.weather)
  // loading flag from reducer for displaying "loading" message until data is fetched

  //use Dispatch
  const dispatch = useDispatch()

  //use Effect to dispatch thunk
  useEffect(() => {
    dispatch(getWeatherByLocationThunk())
  }, []) // , [] to prevent infinite api calls


  return (
        <>
          {loading && //Added
              <li className="list-group-item">
                Loading...
              </li>
          }
          {
            weather.name &&
            <>
            <div className="col-auto">
              <div className="card h-md-100 wd-bg-lg text-white">
                <div className="card-body pt-2">
                  <div className="d-flex flex-row justify-content-center align-items-start">
                  <img src={`/weather-icons/${weather.weather[0].icon}.png`} />
                  <div className="fs-2 fw-normal font-sans-serif text-white mb-1">{`${weather.main.temp.toFixed()}° F`}</div>
                </div>
            <div className="row g-0 h-100 align-items-center">
            <div className="col">
              <div className="d-flex align-items-center">
              <div>
              <h4 className="mb-2 fs-4">{weather.name}, {weather.sys.country}</h4>
              <div className="fs-4 fw-semi-bold">
                <div className="fs-4 text-warning">{weather.weather[0].description} </div>
                Humidity: {weather.main.humidity}%
             </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </>
          }
        </>
  )
}
  export default Weather;

