import React from "react";
import "../Chat.css";
import Img from '../assets/Framechat.jpg'
const ChatBox = () => {
  return (
    <>
      <div className="Chat-container">
        <div className="chat-box">
            <img src={Img} alt="chat"/>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
