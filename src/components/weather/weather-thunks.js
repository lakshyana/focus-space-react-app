import {createAsyncThunk} from "@reduxjs/toolkit";
import {getWeatherByLocation} from "./weather-service";

export const getWeatherByLocationThunk = createAsyncThunk(
    'getWeatherByLocation',
     async () =>  await getWeatherByLocation()
)
