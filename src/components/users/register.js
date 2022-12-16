import React from 'react'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunks";
import {current} from "@reduxjs/toolkit";
import {Navigate} from "react-router";

const Register = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('alice')
    const [password, setPassword] = useState('alice1234')
    const [firstName, setFirstName] = useState('Alisa')
    const [lastName, setLastName] = useState('Chenoy')
    const [email, setEmail] = useState('alisa@gmail.com')
    const [role, setRole] = useState('REGULAR')
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        dispatch(registerThunk({username, password, firstName, lastName, email, role}))
    }

    if(currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

    return(
        <div className={"mx-auto mt-5 p-5 col-10 col-md-10 col-lg-7 col-xl-6"}>
            <h2>Sign up for a new account!</h2>

            <div className="form-group column mt-3">
                <label htmlFor={"username"}>Username</label>
                <input
                    id = "username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    placeholder="username"
                    value={username}/>
            </div>

            <div className="form-group column mt-3">
                <label htmlFor={"password"}>Password</label>

                <input
                    id = "password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="password"
                    type="password"
                    value={password}/>
            </div>

            <div className="form-group column mt-3">
                <label htmlFor={"firstName"}>First Name</label>

                <input
                    id = "firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-control" placeholder="First Name" value={firstName}/>
            </div>

            <div className="form-group column mt-3">
                <label htmlFor={"lastName"}>Last Name</label>

                <input
                    id = "lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-control" placeholder="Last Name" value={lastName}/>
            </div>

            <div className="form-group column mt-3">
                <label htmlFor={"email"}>Email</label>

                <input
                    id = "email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control" type={'email'} value={email}/>
            </div>

            <div className="form-group row mt-3 mb-4">
                <label htmlFor="role">Select if you want regular or premium access: </label>
                <select className={"btn btn-sm btn-secondary dropdown-toggle"} id={"role"} placeholder={'Role'} value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value={'REGULAR'}>Regular</option>
                    <option value={'PREMIUM'}>Premium</option>
                </select>
            </div>

            <button
                className="btn btn-primary w-25 text-center"
                onClick={handleRegisterBtn}>
                Register
            </button>
            {
                currentUser &&
                <h1>Welcome to Focus Space {currentUser.firstName} !</h1>
            }
        </div>
    )
}
export default Register
