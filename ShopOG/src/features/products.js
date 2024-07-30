import { createSlice } from '@reduxjs/toolkit'
import { storeData } from '../assets/data';

export const productSlice = createSlice({
    name:'product',
    initialState: {
        filtredProduct: JSON.parse(sessionStorage.getItem('filtredData')) || storeData,
        detailsProduct: JSON.parse(sessionStorage.getItem('detailsData')) || storeData,
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
        },
        detailsproducts:(state,action) => {
            try {
                const oneProduct = storeData.filter(product => product.id === action.payload)
                state.detailsProduct = oneProduct
                const saveState = JSON.stringify(oneProduct)
                sessionStorage.setItem('detailsData', saveState)

            } catch(err) {
                return err
            }
        }
    }
})

export const { filterproducts, detailsproducts } = productSlice.actions;
export default productSlice.reducer;