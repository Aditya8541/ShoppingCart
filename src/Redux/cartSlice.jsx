import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
        tempItems:[],
        totalPrice : 0
    },
    reducers:{
        addtocart: (state ,action) => {
            const itemsPresent = state.items.find((item) =>{
                return (item.id === action.payload.id)
            })

            if(itemsPresent)
            {
                itemsPresent.quantity +=1;
            }
            else
            {
            state.items.push({...action.payload , quantity:1})
            state.tempItems = ([...state.items])
            }
            state.totalPrice = state.items.reduce((sum ,item) => {
                return (
                    sum = sum + item.price * (item.quantity)
                )
            }, 0)
            
            
        },

        removefromcart :(state , action) => {
                state.items = state.items.filter((item) => {
                    return item.id !== action.payload
                })
                state.tempItems = ([...state.items])
                state.totalPrice = state.items.reduce((sum ,item) => {
                return (
                    sum = sum + item.price * (item.quantity)
                )
            }, 0)

        },

        updatecart : (state , action)=> {
            const itemPresent= state.items.find((item)  => item.id === action.payload.id)
            if(itemPresent)
            {
                itemPresent.quantity = action.payload.value;
                state.totalPrice = state.items.reduce((sum ,item) => {
                return (
                    sum = sum + item.price * (item.quantity)
                )
            }, 0)
            }
        }
    }
})

export const {addtocart , removefromcart, updatecart} = cartSlice.actions;
export default cartSlice.reducer;