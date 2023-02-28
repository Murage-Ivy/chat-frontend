import React from 'react'
import './MessageForm.css'

function MessageForm() {
    return (
        <div className='message-form'>
            <input type="text" placeholder='type a message...'  className='input-message'/>
            <input type="submit" value="Send" className='message-btn' />
        </div>
    )
}

export default MessageForm