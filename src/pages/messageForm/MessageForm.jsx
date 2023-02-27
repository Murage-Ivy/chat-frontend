import React from 'react'

function MessageForm() {
    return (
        <div className='message-form'>
            <input type="text" placeholder='type a message...' />
            <input type="submit" value="Send" />
        </div>
    )
}

export default MessageForm