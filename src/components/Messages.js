import React from 'react'
import { Card } from 'react-bootstrap'
import Message from './Message'
import TextContainer from './textcontainer/TextContainer'
// import ScrollToBottom from 'react-scroll-to-bottom'

const Messages = ({ message, name, users }) => {
    return (
        // <ScrollToBottom>
        <div className="d-flex">
            <Card style={{ height: '60vh' }} className="col-10">
                {message.map((list, i) => {
                    return (
                        <div key={i}>
                            {/* <p>{list.user} : {list.text} <span style={{ float: 'right' }}>{list.time}</span></p> */}
                            <Message message={list} name={name} />
                        </div>
                    )
                })}
            </Card>
            <TextContainer users={users} />
        </div>
        // </ScrollToBottom>
    )
}

export default Messages
