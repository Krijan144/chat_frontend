import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Card } from "react-bootstrap";

//const socket = openSocket("http://localhost:4000");

const Chat = () => {
  const [chat, setChat] = useState();

  useEffect(() => {
    const socket = io.connect("http://localhost:4000");
    socket.on("message", (data) => {
      console.log(data);
      setChat(data);
    });
  }, []);

  return (
    <div className="container">
      <h4>Chat App</h4>
      <Card className="bg-dark text-white ">
        <Card.Img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1ce52173426833.5c08f56353039.png"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title>
            {chat.map((chats) => {
              return chats.message;
            })}
          </Card.Title>
          <Card.Text></Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Chat;
