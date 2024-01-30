import { FaqReduser } from './Slice/SliceFaq'
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
    reducer: {
        faq: FaqReduser
    }
})
export default store