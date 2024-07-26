import { createSlice } from '@reduxjs/toolkit'



export const sliderSlice = createSlice({
    name:'slider',
    initialState: {
        value:0,
        length: 4,
    },
    reducers:{
        nextSlide:( state , action) => {
            state.value = action.payload >= state.length ? 0 : action.payload + 1;
        },
        prevSlide:(state,action) => {
            state.value = action.payload <= 0 ? state.length : action.payload - 1;
        },
        dotSlide(){}
    }
})




export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;