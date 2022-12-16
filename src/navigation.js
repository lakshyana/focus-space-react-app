
import React from 'react';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

const Navigation = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {pathname} = useLocation()
    const parts = pathname.split('/')


    return(
        <div id={"navigation"} className="position-absolute bottom-50 d-flex flex-column justify-content-end">
            <ul className="nav flex-column nav-pills">
                <li className="nav-item">
                    <Link to="/"
                          className={`nav-link ${parts[1] === ''?'bg-dark text-white': 'text-dark'}`}>
                        <i className="bi bi-house-door-fill text-white"></i>
                    </Link>
                </li>
                <li className="nav-item ">
                    <Link to="/search"
                          className={`nav-link ${parts[1] === 'search'?'bg-dark text-white': 'text-dark'}`}>
                        <i className="bi bi-search text-white"></i>
                    </Link>
                </li>
                <li className={`nav-item ${!currentUser ? 'd-none':''}`}>
                    <Link to="/users"
                          className={`nav-link ${parts[1] === 'users'?'bg-dark text-white': 'text-dark'}`}>
                        <i className="bi bi-people-fill text-white"></i>
                    </Link>
                </li>
                <li className={`nav-item ${currentUser ? 'd-none':''}`}>
                    <Link to="/login"
                          className={`nav-link ${parts[1] === 'login'?'bg-dark text-white': 'text-dark'}`}>
                        <i className="bi bi-box-arrow-in-right text-white"></i>
                    </Link>
                </li>
                <li className={`nav-item ${currentUser ? 'd-none':''}`}>
                    <Link to="/register"
                          className={`nav-link ${parts[1] === 'register'?'bg-dark text-white': 'text-dark'}`}>
                        <i className="bi bi-person-plus-fill text-white"></i>
                    </Link>
                </li>
                <li className={`nav-item ${!currentUser ? 'd-none':''}`}>
                    <Link to="/profile"
                          className={`nav-link ${parts[1] === 'profile'?'bg-dark text-white': 'text-dark'}`}>
                        <i className="bi bi-person-circle text-white"></i>
                    </Link>
                </li>
            </ul>
        </div>

    )
}

export default Navigation
