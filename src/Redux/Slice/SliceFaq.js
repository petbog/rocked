import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchFaq = createAsyncThunk('faq/fetchFaq', async () => {
    try {
        const { data } = await axios.get('https://63bf2a38e262345656e4a5dd.mockapi.io/faq')
        return data
    } catch (error) {
        console.warn(error)
    }
})

const initialState={
    data:[]
}

const FaqSlice = createSlice({
    name: 'Faq',
    initialState,
    status:'',
    extraReducers: (builder) => {
        builder.addCase(fetchFaq.pending, (state, action) => {
            state.data = [];
            state.status = 'loading';
        });
        builder.addCase(fetchFaq.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'success';
        });
        builder.addCase(fetchFaq.rejected, (state, action) => {
            state.data = [];
            state.status = 'error'
        });

    }
})


export const { } = FaqSlice.actions
export const FaqReduser = FaqSlice.reducer


