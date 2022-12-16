import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
//import thunks
import {getQuoteThunk} from "./quote-thunks";

const Quote = () => {
    const {quote, loading} = useSelector(state => state.quote)

    console.log("selector")
    console.log("quote", quote)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getQuoteThunk())
    }, [])

    console.log("quote after use effect", quote)
    console.log("loading value", loading)
    // console.log("Text: ",quote.author)
    // console.log("Author: ",quote.author)

    return (
        <>
            { loading && //Added
                <li className="list-group-item">
                    Loading...
                </li>
            }

            { quote &&
            <div className={"d-flex flex-column align-items-center text-white fs-6"}>
                <h4>{quote.text}</h4>
                <h4>{quote.author}</h4>
            </div>
            }
        </>
        // add a container to hold the quote and author in the middle of the page


    )

}
export default Quote;
