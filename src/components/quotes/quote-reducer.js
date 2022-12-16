import {createSlice} from "@reduxjs/toolkit";
import {getQuoteThunk} from "./quote-thunks";

const initialState = {
    quote: [],
    loading: false
}
//create the slice
//reducer is a function that takes in the current state and an action and returns a new state
const quoteReducer = createSlice({
    name: "quote",
    initialState: initialState,
    extraReducers: { // define asynchronous reducers
        // [getQuoteThunk.pending]: // if request is not yet fulfilled …
        //     (state) => {
        //         state.loading = true // set loading true so UI can display spinner
        //         state.quote = [] // empty weather since we are still fetching them
        //     } ,
        [getQuoteThunk.fulfilled]: (state, action) => {
            state.loading = false // turn off loading flag since we have the data
            state.quote = action.payload // set the quotes to the payload
        } ,
        [getQuoteThunk.rejected]: (state, action) => {
            state.loading = false // reset loading flag, maybe use another flag to report error
        }  ,
    }
}
);

export default quoteReducer.reducer; // export the reducer

