import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const clickHandle = (e) => {
    console.log("Clicked");
    return !name || !room ? e.preventDefault() : null;
  };
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <div className="text-center">
        <h1>Join</h1>

        <div>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="text"
            placeholder="room"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <br />

        <Link to={`/chat?name=${name}&room=${room}`} onClick={clickHandle}>
          <button>Join in</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
