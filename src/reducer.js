import {
    combineReducers
} from "redux";
import userReducer from "./Components/signup/UserSlice";

export default combineReducers({
    user: userReducer
})