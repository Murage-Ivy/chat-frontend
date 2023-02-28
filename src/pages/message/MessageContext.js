import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const messageContext = createContext();

const MessageProvider = ({ children }) => {

    const navigate = useNavigate();
    const [contacts, setContacts] = useState([])


    const getFriend = async (friendId) => {
        const response = await fetch(`/friends/${friendId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("user")}`
            }
        })
        const data = await response.json()
        if (response.ok) {
            console.log(data)
            const newContacts = ([...contacts, data])
            const uniqueContacts = [...new Set(newContacts)]
            console.log(uniqueContacts)
            setContacts(uniqueContacts)
        } else {
            console.log("Error")
        }
    }

    console.log(contacts.filter(contact => contact.id ))

    const messageFriend = (friendId) => {
        navigate("/chats")
        getFriend(friendId)
    }

    const value = {
        messageFriend, contacts
    }
    return (
        <messageContext.Provider value={value} >
            {children}
        </messageContext.Provider>
    );
}


export { messageContext, MessageProvider }