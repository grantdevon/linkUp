import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Link } from "../../Interfaces/Interfaces";
import { fetchSubCollection } from "../../Sevices/firestore.service";

export const fetchUserLinks = createAsyncThunk("links/fetchUserLinks", 
    async (params) => {
        let {id, collectionName} = params
        try {

            let links = await fetchSubCollection(id, collectionName)
            
            return links
            
        } catch (error) {
            console.log(error);
            return []
            
        }
    }

)

const initialState = {
    loading: true,
    links: [] as Link[]
}

const linksreducer = createSlice({
    name: "links",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(fetchUserLinks.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(fetchUserLinks.fulfilled, (state, action) => {
            state.links = []
            state.links = action.payload
            state.loading = false
        })

        builder.addCase(fetchUserLinks.rejected, (state, payload) => {
            state.links = [],
            state.loading = false
        })

    }
})

export default linksreducer.reducer