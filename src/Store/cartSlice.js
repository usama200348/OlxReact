import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState :{
        cart:[]
    },
    reducers:{
        updateCart :(state,data) =>{
            state.cart.push(data.payload)
        console.log('data of cart',data);
        },
        removeFromCart:(state)=>{

        }
    }
})

export const {updateCart, removeFromCart}=cartSlice.actions

export default cartSlice