import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name:"counter",
    initialState:{ counter: 0 },
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        toggle(state){
            state.counter=0
        },
        incrementbyfive(state,action){
            state.counter=state.counter+action.payload //must payload
        }
    }
})
export const counterAction = counterSlice.actions;
export default counterSlice.reducer;
