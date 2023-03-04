import React from 'react'
import './MessageForm.css'

function MessageForm({ handleSubmit, handleChange, message }) {


    return (
        <form className='message-form' onSubmit={handleSubmit}>
            <input type="text"
                placeholder='type a message...'
                className='input-message'
                onChange={handleChange}
                value={message.message}
                name="message" />
            <input type="submit" value="Send" className='message-btn' />
        </form>
    )
}

export default MessageForm