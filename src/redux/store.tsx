import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user.reducer";
import friendsReducer from "./reducers/friends.reducer";
import linksReducer from "./reducers/links.reducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        friends: friendsReducer,
        links: linksReducer
    }
})