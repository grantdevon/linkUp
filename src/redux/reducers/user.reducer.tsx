import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../Interfaces/Interfaces";
import { fetchUser } from "../../Sevices/user.service";


export const fetchUserDetails = createAsyncThunk("user/fetchUser",
    async (userId:string) => {

        try {
            let userData: User = await fetchUser(userId)
            delete userData["date_created"]
            delete userData["links"]
            delete userData["friends"]



            
            return userData
        } catch (error) {
            console.log(error);
            return Promise.reject(error)
        }

    })


const initialState: User = {
    email: "",
    id: "",
    name: "",
    note: "",
    friends: [],
    links: [],
    customText: "",
    loading: true,
    date_created: {}
}

const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCustomText: (state, action) => {
            state.customText = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserDetails.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchUserDetails.fulfilled, (state, action) => {            
            state.email = action.payload.email
            state.friends = action.payload.friends
            state.id = action.payload.id
            state.name = action.payload.name
            state.note = action.payload.note
            state.links = action.payload.links
            state.loading = false
        })
    }

})

export default userReducer.reducer