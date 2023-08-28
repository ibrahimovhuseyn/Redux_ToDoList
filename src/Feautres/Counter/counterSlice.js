import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementbyAmount: (state, action)=>{
            state.value += action.payload
        },
        decrementByAmount: (state, action)=>{
            state.value -= action.payload
        }
    }
})

export const {decrement, increment, incrementbyAmount, decrementByAmount}= counterSlice.actions
export default counterSlice.reducer