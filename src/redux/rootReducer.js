import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { commentsReducer } from "./commentsReducer";
import { inputReducer } from "./inputReducer";
import { likesReducer } from "./likesReducer";


export const rootReducer = combineReducers({
    likesReducer: likesReducer,
    inputReducer: inputReducer,
    commentsReducer: commentsReducer,
    appReducer: appReducer
})