import { configureStore} from "@reduxjs/toolkit";
import counterSlice from './counter';
import authSlice from './auth';

const store = configureStore({
    reducer:{counterReducer:counterSlice,
        authReducer:authSlice,
    }
})



// import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { combineReducers, createStore } from "redux";

// const reducer = (state = { counter: 0 }, action: any) => {
//   switch (action.type) {
//     case "toggle":
//       return {
//         ...state,
//         counter:0,
//       };
//     case "increment":
//       return {
//         ...state,
//         counter:state.counter+1,
//       };
//     case "decrement":
//       return {
//         ...state,
//         counter:state.counter-1,
//       };
//     case "incrementbyfive":    
//       return {
//         ...state,
//         counter:state.counter + action.amount,        
//       };
//     default:
//       return state;
//   }
// };

// const rootReducer =  combineReducers({reducer:reducer});


// const store = createStore(rootReducer);

export default store;
