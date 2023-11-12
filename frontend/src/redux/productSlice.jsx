import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast"
let initialState = {
    productList:[],
    cartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : []
}

export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        setDataProduct: (state, action)=>{
            state.productList=[...action.payload]
        },
        addCartItems: (state, action)=> {
            const check = state.cartItem.some((el)=>el._id === action.payload._id)
            if(check){
                toast("Item allready added")
            }else{
                toast("item is added")
                const total = action.payload.price
                state.cartItem = [...state.cartItem,{...action.payload,qty : 1,total : total}]
            }
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        },
        DeletCartItem: (state, action)=> {
            toast("Item deleted")
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
            state.cartItem.splice(index, 1)
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        },
        increasedQty: (state, action)=> {
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
            let qty = state.cartItem[index].qty;
            const qtyInc = ++qty;
            state.cartItem[index].qty = qtyInc
            let price = state.cartItem[index].price
            let total = price * qtyInc;
            state.cartItem[index].total = total
        },
        decreasedQty: (state, action)=> {
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
            let qty = state.cartItem[index].qty;
            if(qty > 1){
                
                const qtydecc = --qty;
                state.cartItem[index].qty = qtydecc
                let price = state.cartItem[index].price
                let total = price * qtydecc;
                state.cartItem[index].total = total
            }
        },
       
    }

});


export const {setDataProduct, addCartItems, DeletCartItem, increasedQty, decreasedQty, } = productSlice.actions

export default productSlice.reducer