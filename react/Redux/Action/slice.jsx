import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "user",
    initialState: {
        userDetails: []
    },
    reducers: {
        userData: (state, action) => {
            console.log("action.payload.userInfo", action, action.payload.userInfo)
            state.userDetails = action.payload.userInfo
        },

        removeUserInfo: (state, action) => {
            state.removeUserDetails = action.payload.removeUser
        },
    }
});


export const { userData, removeUserInfo } = userSlice.actions;

export default userSlice.reducer;