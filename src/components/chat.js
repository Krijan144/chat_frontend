import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import queryString from 'query-string'
import InfoBar from "./Infobar/InfoBar";
import Input from "./input/input";
import Messages from "./Messages";
import TextContainer from "./textcontainer/TextContainer";


let socket;

const Chat = ({ location }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState('');
  const [name, setName] = useState('');
  const [users, setUsers] = useState()
  const ENDPOINT = "http://localhost:4000"

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)
    setName(name);
    setRoom(room);

    socket = io.connect(ENDPOINT);
    socket.on('tests', (msg) => {
      console.log(msg);
    })
    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message])
    })

    socket.on("roomUsers", ({ users }) => {
      setUsers(users)
    })
  }, [message])

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit('chatMessage', message, () => {
        setMessage('')
      })
    }
  }

  return (
    <div>
      <div className="container mt-5">
        <h4>Chat App</h4>
        <InfoBar room={room} />
        <Messages message={messages} name={name} users={users} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      {/* <TextContainer users={users} /> */}
    </div>
  );
};

export default Chat;
