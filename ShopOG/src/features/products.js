import { createSlice } from '@reduxjs/toolkit'
import { storeData } from '../assets/data';

export const productSlice = createSlice({
    name:'product',
    initialState: {
        filtredProduct: JSON.parse(sessionStorage.getItem('filtredData')) || storeData
    },
    reducers:{
        filterproducts:(state,action) => {
            try {
                const filtred = storeData.filter(product => product.type === action.payload)
                state.filtredProduct = filtred
                const saveState = JSON.stringify(filtred)
                sessionStorage.setItem('filtredData', saveState)

            } catch(err) {
                return err
            }
        }
    }
})

export const { filterproducts } = productSlice.actions;
export default productSlice.reducer;