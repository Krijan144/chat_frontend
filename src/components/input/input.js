import React from 'react'
import { Card } from "react-bootstrap";

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <div>
            <form>
                <Card className="bg-dark text-white ">
                    <input type="text"
                        value={message}
                        placeholder="Type something .... "
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
                    />
                    <button onClick={(e) => sendMessage(e)}>Send </button>
                </Card>
            </form>

        </div >
    )
}

export default Input
