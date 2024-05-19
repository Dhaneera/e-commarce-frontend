import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    show:false
}

const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        setShow:(state)=>{
            state.show=!state.show;
        }
    }
})

export const {setShow} = CartSlice.actions;
export default CartSlice.reducer