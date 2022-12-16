// import logo from './logo.svg';
// import './App.css';

import React from 'react';

//import style components
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import router and navigation components
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

//import  components
import Dashboard from "./components/dashboard";
import Weather from "./components/weather";
import Todos from "./components/todo";
import Quote from "./components/quotes/index";

//other imports
import Navigation from  "./navigation" ;
import ProtectedRoute from "./components/users/protected-route";
import Users from "./components/users";
import musicReducer from "./components/search/music-reducer";
import MusicSearch from "./components/search/music-search";
import MusicDetails from "./components/search/music-details";
import reviewsReducer from "./components/reviews/reviews-reducer";
import PublicProfile from "./components/users/public-profile";
import followsReducer from "./components/follows/follows-reducer";
import {likesReducer} from "./components/likes/likes-reducer";
import usersReducer from "./components/users/users-reducer";
import Login from "./components/users/login";
import Register from "./components/users/register";
import CurrentUser from "./components/users/current-user";
import Profile from "./components/users/profile";


// import configureStore
import { configureStore } from '@reduxjs/toolkit';
// import the Provider component
import {Provider} from "react-redux";
import todoReducer from "./components/todo/todo-reducer";
import weatherReducer from "./components/weather/weather-reducer";
import quoteReducer from "./components/quotes/quote-reducer";
import Background from "./components/background";

// configure the store
const store = configureStore(
    {reducer: {
            todos: todoReducer,
            weather: weatherReducer,
            quote: quoteReducer,
            // added
            users: usersReducer,
            music: musicReducer,
            likes: likesReducer,
            reviews: reviewsReducer,
            follows: followsReducer

        }
    }

    )


function App() {
  return (
     <>
         <div className="container-fluid p-0 pt-0 mt-0 m-0 vh-100 w-100">
             <Provider store={store}>
                    <BrowserRouter>
                        <CurrentUser>
                               <Navigation/>
                            <Background/>
                        <Routes>
                            <Route index element={<Dashboard/>}/>
                            <Route path="/search" element={<MusicSearch/>}/>
                            <Route path="/users" element={
                                <ProtectedRoute>
                                    <Users/>
                                </ProtectedRoute>
                            }/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/profile" element={
                                <ProtectedRoute>
                                    <Profile/>
                                </ProtectedRoute>
                            }/>
                            <Route path="/details/:id" element={<MusicDetails/>}/>
                            <Route path="/profile/:uid" element={<PublicProfile/>}/>
                            <Route path="/todos" element={<Todos/>}/>
                            <Route path="/weather" element={<Weather/>}/>
                            <Route path="/quote" element={<Quote/>}/>
                            <Route path="/details" element={<MusicDetails/>}/>
                        </Routes>
                    </CurrentUser>
                    </BrowserRouter>


             </Provider>
         </div>
     </>
  );
}

export default App;

// <Background/>
