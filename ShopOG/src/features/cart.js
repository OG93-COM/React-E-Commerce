import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
    name:'cart',
    initialState: {
        cartList:[],
        amount:0,
        totalAmount:0,
        totalPrice:0
    },
    reducers:{
        addToCart:(state,action)=> {
            const productId = action.payload;
      try {
        const exist = state.cartList.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += productId.price;
          state.totalAmount++;
          state.totalPrice += productId.price;
        } else {
          state.cartList.push({
            id: productId.id,
            price: productId.price,
            size: productId.size,
            amount: 1,
            img: productId.img,
            totalPrice: productId.price,
            name: productId.name,
            text: productId.text,
            color: productId.color,
          });
          state.totalAmount++;
          state.totalPrice += productId.price;
        } console.log(state.cartList)
      } catch (err) {
        return err;
      }
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;