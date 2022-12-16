import React from   'react' ;
import {Routes, Route} from "react-router";


//import weather componentweather
import Weather from   "./weather" ;
// Additional imports for redux:
import weatherReducer from "./weather/weather-reducer";
//import to-do component
import Todos from   "./todo" ;
import todoReducer from   "./todo/todo-reducer" ;
//import quote component
import Quote from   "./quotes" ;
import quoteReducer from "./quotes/quote-reducer";
import Greeting from "./greeting";
import Goal from "./goal";

import Background from './background';


// import configureStore
import { configureStore } from '@reduxjs/toolkit';
// import the Provider component
import {Provider} from "react-redux";

//other imports
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Navigation from "../navigation";




const Dashboard = () => {
    const {currentUser} = useSelector((state) => state.users)

    return (
            <div id={"dashboard"}>

                <div className="position-relative d-flex mx-auto flex-column vh-100 w-100 mt-9 p-5 mb-5">

                    <div className="d-flex flex-row ">

                        <div className="position-absolute top-0 start-50 translate-middle-x">

                        </div>

                        <div className="position-absolute mt-4 me-2 top-0 end-0">
                           <Weather/>
                        </div>
                    </div>

                    <div className="position-absolute top-50 start-0 translate-middle-y">

                    </div>
                    <div className="position-absolute bottom-50 start-50 translate-middle">

                       <span className="text-white fs-1 text-center">
                           <Greeting/>
                           {
                                 currentUser ? `, ${currentUser.firstName}!` : ", welcome to your dashboard!"
                           }

                       </span>
                    </div>

                    <div className="position-absolute top-50 start-50 translate-middle">
                        <Goal/>
                    </div>

                    <div className="position-absolute top-50 end-0 translate-middle-y">

                    </div>
                    <div className="position-absolute bottom-0 start-0 mb-5">

                    </div>
                    <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5">
                        <Quote/>
                    </div>

                </div>

                <div className="position-absolute bottom-0 end-0 mb-5 me-5">
                    <Todos/>
                </div>

            </div>




    );
}
export default Dashboard;


// <div className={"text-center text-6xl wd-text-gray"}>
//     <Greeting/> {currentUser ? `, ${currentUser.username}!` : `Guest!`}
// </div>


// // configure the store
// const store = configureStore(
//     {reducer: {
//             todos: todoReducer,
//             weather: weatherReducer,
//             quote: quoteReducer,
//         }
//     })
