import {createSlice} from "@reduxjs/toolkit";
import {getWeatherByLocationThunk} from "./weather-thunks";

//import initial weather data from JSON file
// import initialState from "./initialState.json"

const initialState = {
    weather: [],
    loading: false
}

// create the slice
const weatherReducer = createSlice({
    name: "weather", // name the reducer
    initialState: initialState, // initialize the reducer's state
    extraReducers: { // define asynchronous reducers
        [getWeatherByLocationThunk.pending]: // if request is not yet fulfilled …
            (state) => {
                state.loading = true // set loading true so UI can display spinner
                state.weather = [] // empty weather since we are still fetching them
            }   ,
        [getWeatherByLocationThunk.fulfilled]: (state, action) => { // when we get response, request is fulfilled
            state.loading = false // turn off loading flag since we have the data
            state.weather = action.payload
        },
        [getWeatherByLocationThunk.rejected]: (state, action) => { // if request times out, or responds with error
            state.loading = false
        }
    }
});

export default weatherReducer.reducer; // export the reducer
