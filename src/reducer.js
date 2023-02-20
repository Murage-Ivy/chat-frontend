import {
    combineReducers
} from "redux";
import friendsReducer from "./Components/friendForm/friendSlice";
import loginReducer from "./Components/login/loginSlice";
import userReducer from "./Components/signup/UserSlice";

export default combineReducers({
    user: userReducer,
    friends: friendsReducer,
    loggedUser: loginReducer
})