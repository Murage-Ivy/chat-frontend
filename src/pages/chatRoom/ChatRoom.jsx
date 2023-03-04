import React, { useEffect, useState } from 'react'
import token from '../../auth';
import { useRef } from "react";

import MessageForm from '../messageForm/MessageForm'
import ActionCable from 'actioncable';
function ChatRoom() {
    const [message, setMessage] = useState({
        message: "",
        sender: 20,
        reciever: 22
    });

    useEffect(() => {
        const cable = ActionCable.createConsumer("ws://localhost:3000/cable");

        const handlers = {
            connected() {
                console.log("connected")
            },
            received(data) {
                console.log(data)
            },

            disconnected() {
                console.log("disconnected")
            }

        }

        cable.subscriptions.create({ channel: 'MessageRoomChannel', token: localStorage.getItem("user") }, handlers)

    }, [])

    const addMessage = async () => {
        const response = await fetch('messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(message)

        })

        if (response.ok) {
            console.log("sent")

        }


    }
    function handleSubmit(e) {
        e.preventDefault();
        addMessage();

    }
    function handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        setMessage({ ...message, [name]: value })
    }
    return (
        <div>
            <MessageForm handleSubmit={handleSubmit}
                handleChange={handleChange}
                message={message} />
        </div>
    )
}

export default ChatRoom