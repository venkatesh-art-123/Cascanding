import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Action/slice"

const userRedux = configureStore({
    reducer: {
        user: userReducer
    }

});

export default userRedux;