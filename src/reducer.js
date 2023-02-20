import {
    combineReducers
} from "redux";
import friendsReducer from "./Components/friendForm/friendSlice";
import userReducer from "./Components/signup/UserSlice";

export default combineReducers({
    user: userReducer,
    friends: friendsReducer
})