import React from 'react'
import {createAsyncThunk} from "@reduxjs/toolkit";
import {createUser, findAllUsers, findUserById, updateUser, login, logout, profile, register} from "./users-service";

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)

export const profileThunk = createAsyncThunk(
    'profile',
    async () => await profile()
)

export const findUserByIdThunk = createAsyncThunk(
    'findUserById',
    async (uid) => await findUserById(uid)
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)

export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await findAllUsers()
)

export const createUserThunk = createAsyncThunk(
    'createUser',
    async () => await createUser()
)

//update user
export const updateUserThunk = createAsyncThunk(
    'updateUser',
    async (user) => {

        await updateUser(user._id, user)
        return user
    }
)

