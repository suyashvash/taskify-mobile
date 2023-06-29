import { createSlice } from '@reduxjs/toolkit'

const initialState = { userToken: null, loggedIn: false,theme:null }

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userToken = action.payload.userToken
            state.loggedIn = action.payload.loggedIn
        },
        setUserLogOutState: (state) => {
            state.userToken = null
            state.loggedIn = false
        },
    }
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions
export const selectUserToken = (state) => state.user.userToken
export const selectLoggedIN = (state) => state.user.loggedIn
export default userSlice.reducer