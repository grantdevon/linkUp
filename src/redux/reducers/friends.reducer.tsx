import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Friends } from "../../Interfaces/Interfaces";
import { fetchSubCollection } from "../../Sevices/firestore.service";

export const fetchFriends = createAsyncThunk("friends/fetchFriends",
    async (apiParams) => {
        try {

            console.log(apiParams);

            let { id, collectionName } = apiParams
            let friends: Friends = await fetchSubCollection(id, collectionName)
            console.log("friends from firebase: ", friends);

            return friends

        } catch (error) {

            console.log(error);

            console.log("error happening");
            return Promise.reject(error)



            return []

        }
    })



const initialState = {
    friends: [] as Friends[],
    loading: true
}

const friendsReducer = createSlice({
    name: "friends",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchFriends.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(fetchFriends.fulfilled, (state, action) => {
            console.log("payload: ", action.payload);
            state.friends = []
            state.friends = action.payload
            state.loading = false

            
        })
        builder.addCase(fetchFriends.rejected, (state, action) => {
            state = state
        })
    }

})

export default friendsReducer.reducer