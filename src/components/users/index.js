import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllUsersThunk} from "./users-thunks";
import {Link} from "react-router-dom";

const Users = () => {
    const {users, loading} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    return(
        <div className={"m-5 p-5"}>
            <h1>Numbers of Users: {users.length}</h1>
            <div className="list-group">
                {
                    users.map((user) =>
                        <Link to={`/profile/${user._id}`} key={user._id} className="list-group-item">
                            {user.username}
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Users
