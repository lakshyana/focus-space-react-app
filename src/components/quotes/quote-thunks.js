import {createAsyncThunk} from "@reduxjs/toolkit";
import {getQuote} from "./quote-service";

export const getQuoteThunk = createAsyncThunk(
    'getQuote',
    async () => await getQuote()
)
