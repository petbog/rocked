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

export const fetchPoppupData = createAsyncThunk('poppup/fetchPoppupData', async (params) => {
    try {
        const { name, email, phone } = params;
        console.log(params)
        const { data } = await axios.post(`https://back-rocked.vercel.app/send-email`, { name, email, phone })
        return data
    } catch (error) {
        console.warn(error)
    }
})





const initialState = {
    data: [],

}

const FaqSlice = createSlice({
    name: 'Faq',
    initialState,
    status: '',
    statusEmail:'loading',
    extraReducers: (builder) => {
        //данные для аккордиона
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
        //данные для аккордиона
        builder.addCase(fetchPoppupData.pending, (state, action) => {
            state.statusEmail = 'loading';
        });
        builder.addCase(fetchPoppupData.fulfilled, (state, action) => {
            state.statusEmail = 'success';
        });
        builder.addCase(fetchPoppupData.rejected, (state, action) => {
            state.statusEmail = 'error'
        });
    }
})


export const { } = FaqSlice.actions
export const FaqReduser = FaqSlice.reducer


