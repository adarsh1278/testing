import { combineReducers } from "redux"; // Import combineReducers to combine multiple reducers
import { configureStore } from "@reduxjs/toolkit"; // Import configureStore from Redux Toolkit
import ManagerDetailReducer from "./Reducer/managerDetail_Reducer"; // Import your manager detail reducer


const rootReducer = combineReducers({
  manager: ManagerDetailReducer, 
});


const store = configureStore({
  reducer: rootReducer, 
 
});


export default store;


