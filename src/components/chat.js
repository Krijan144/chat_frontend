import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import {
  Col,
  InputGroup,
  Card,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
//import { qs, parse } from "qs";
import queryString from "query-string";
import axios from "axios";

//const socket = openSocket("http://localhost:4000");
var socket;

const Chat = ({ location }) => {
  const [chat, setChat] = useState([]);
  const [dbchat, setdbchat] = useState();
  const [text, setText] = useState([]);
  const [username, setUser] = useState();
  const [room, setRoom] = useState();
  useEffect(async () => {
    let res = await axios.get("http://localhost:4000/api/chat/1");
    console.log(res);
    setdbchat(res);
  }, []);

  useEffect(() => {
    const { user, room1 } = queryString.parse(location.search);
    console.log(room1);
    setUser(user);
    setRoom(room1);
    socket = io.connect("http://localhost:4000", {
      withCredentials: true,
      extraHeaders: {
        valid: "true",
      },
    });
    console.log(room, "room");
    socket.emit("joinroom", { username, room });
    socket.on("message", (data) => {
      setChat([...chat, data]);
    });
  }, []);

  console.log(chat);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("chatMessage", [text]);

    // socket.emit("chatMessage", "ok");
  };
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container my-5">
      <div
        className="d-flex p-2 bd-highlight"
        style={{
          backgroundColor: "#075E54",
          color: "white",
          textAlign: "center",
        }}
      >
        CHAT APP
      </div>

      <Card className="text-white  my-2" style={{ backgroundColor: "#075E54" }}>
        <div className="row">
          <div className="sidebar col-2">
            <p className="text-justify">Online</p>
          </div>
          <div className="overflow col-10" style={{ overflowY: "scroll" }}>
            <Card.Img
              src="https://lh3.googleusercontent.com/-Uwd8Cr-7C5g/WdIaWHqBnWI/AAAAAAAANmc/Mdv_tZIIRnIOR_zvAJJ0VuztB1Q9k50bwCHMYCw/s1600/whatsapp.jpg"
              alt="Card image"
              height="500px"
              width="200px"
            />

            <Card.ImgOverlay>
              {chat.map((chats) => {
                return <p>{chats.text}</p>;
              })}
              {/* {chat.username}
              {chat.text} */}
              {/* <Card.Title>{chat.username}</Card.Title>
              <Card.Text>{chat.text}</Card.Text>
              <Card.Text>{chat.time}</Card.Text> */}
            </Card.ImgOverlay>
          </div>
        </div>
      </Card>
      <Form onSubmit={handleSubmit}>
        <Form.Row className="align-items-center">
          <Col sm={11} className="my-3">
            <Form.Label htmlFor="inlineFormInputName" srOnly>
              Name
            </Form.Label>
            <Form.Control
              id="inlineFormInputName"
              placeholder="Enter Your Message"
              value={text}
              onChange={onChangeText}
            />
          </Col>

          <Col xs="auto" className="my-1">
            <Button type="submit">Enter</Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};

export default Chat;
