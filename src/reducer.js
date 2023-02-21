import {
    combineReducers
} from "redux";
import loginReducer from "./Components/login/loginSlice";
import userReducer from "./Components/signup/UserSlice";
import friendsReducer from "./pages/friendForm/friendSlice";

export default combineReducers({
    user: userReducer,
    friends: friendsReducer,
    loggedUser: loginReducer
})