import React from 'react'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunks";
import {Navigate, useNavigate} from "react-router";

const Login = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('alisa')
    const [password, setPassword] = useState('alisa')


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLoginBtn = () => {
        try {
            dispatch(loginThunk({username, password}))
            // navigate('/profile')
        } catch (e) {

        }
    }
    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }
    return(
        <div className={"m-5 p-5"}>
            <h1>Login</h1>
            <input
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="username"
                value={username}/>
            <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control" placeholder="password" type="password" value={password}/>

            <button
                className="btn btn-primary w-100"
                onClick={handleLoginBtn}>Login</button>
        </div>
    )
}
export default Login
