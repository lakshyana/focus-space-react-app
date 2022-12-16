import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk, updateUserThunk} from "./users-thunks";
import {useNavigate} from "react-router";
import Follows from "../follows/follows";
import Likes from "../likes/likes";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faRightFromBracket, faCheck} from '@fortawesome/free-solid-svg-icons'


const Profile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const [password, setPassword] = useState(currentUser.password)
    const [firstName, setFirstName] = useState( currentUser.firstName)
    const [lastName, setLastName] = useState( currentUser.lastName)
    const [email, setEmail] = useState( currentUser.email)
    const [role, setRole] = useState( currentUser.role)

    const dispatch = useDispatch()

    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }

    const handleEditBtn = (elementId, elementId2=null) => {
        // console.log("edit button clicked")
        dispatch(updateUserThunk({...currentUser, firstName: firstName, lastName: lastName,
            email: email, password: password, role: role}))
        const element = document.getElementById(elementId);
        element.classList.toggle("hidden");

        if (elementId2) {
            const element2 = document.getElementById(elementId2);
            element2.classList.toggle("hidden");
        }

    }

    function toggle(elementId, elementId2=null) {
        const element = document.getElementById(elementId);
        element.classList.toggle("hidden");
        if (elementId2) {
            const element2 = document.getElementById(elementId2);
            element2.classList.toggle("hidden");
        }
    }

    return(
        <div className={"mx-auto mt-5 p-5 col-xl-6 col-10 col-md-10 col-lg-7 text-white"}>
            <div className={"d-flex flex-row justify-content-between mb-2"}>
                <span className={"fs-4"}> Profile</span>
                <span className={"d-flex flex-row"}>
                    <span className={"d-flex flex-column me-2"}>
                    <FontAwesomeIcon id={"toggler"} icon={faEdit} className={"fs-3 text-primary"} onClick={() => toggle('toggle', 'toggle1')}/>
                    Edit Profile
                    </span>
                    <span className={"d-flex flex-column"}>
                    <FontAwesomeIcon icon={faRightFromBracket} className={"fs-3 text-danger"} onClick={handleLogoutBtn}/>
                    Logout
                    </span>
                </span>
            </div>

            <div className= {
                "d-flex flex-column justify-content-center align-items-center fs-2 mb-4 mt-4"
            }>
                { currentUser &&
                    <h1>Welcome to Focus Space {currentUser.firstName}! 👋 </h1>
                }
            </div>


            <div id={"toggle"} className={"col-10 col-md-10 col-lg-7 col-xl-6 mb-4"}>

                <div className={"d-flex flex-column fs-6"}>
                    <span className={"fs-5 text-primary mb-2"}>Your Profile Details</span>
                    <div className={"d-flex flex-row justify-content-between"}>
                        <span>User Name</span>
                        <span>{currentUser.username}</span>
                    </div>
                    <div className={"d-flex justify-content-between"}>
                        <span>First Name</span>
                        <span>{firstName}</span>

                    </div>
                    <div className={"d-flex justify-content-between"}>
                        <span>Last Name</span>
                        <span>{lastName}</span>

                    </div>
                    <div className={"d-flex justify-content-between"}>
                        <span>Email</span>
                        <span>{email}</span>
                    </div>
                    <div className={"d-flex justify-content-between"}>
                        <span>Role</span>
                        <span>{role}</span>
                    </div>
                </div>

            </div>


            <div id={"toggle1"} className={"hidden col-10 col-md-10 col-lg-7 col-xl-6"}>

                <div className={"d-flex flex-row justify-content-between"}>
                    <span className={"fs-5"}>Edit your Profile Details</span>
                    <span className={"d-flex flex-column"}>
                    <FontAwesomeIcon icon={faCheck} className={"fs-3 text-success"}  onClick={() => handleEditBtn('toggle1', 'toggle')}/>
                    Submit
                </span>
                </div>

                <div className="form-group column mt-3">
                    <span className={"d-flex flex-column fs-6"}>Username: {currentUser.username} </span>
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

            </div>


            <Follows uid={currentUser._id}/>



        </div>
    )
}
export default Profile

// <FontAwesomeIcon icon={faEdit} className={"fs-3 text-primary"} onClick={() => handleEditBtn()}/>


// <Likes uid={currentUser._id} p1="v1" p2="v2"/>
