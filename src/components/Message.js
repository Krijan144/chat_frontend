import React from "react";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      {/* <p className="sentText"></p> */}
      <div className="messageBox">
        <p className="messageText">
          {trimmedName} : {text}
        </p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyEnd">
      <div className="messageBox">
        <p className="messageText">
          {user} : {text}
        </p>
      </div>
    </div>
  );
};

export default Message;
