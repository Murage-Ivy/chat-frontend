import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const messageContext = createContext();

const MessageProvider = ({ children }) => {

    const navigate = useNavigate();

    const messageFriend = (friendId) => {
        console.log("message friend")
        navigate("/chats")

    }

    const value = {
        messageFriend
    }
    return (
        <messageContext.Provider value={value} >
            {children}
        </messageContext.Provider>
    );
}


export { messageContext, MessageProvider }