import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <div>
        <img
          className="h-12"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
      <div>
        <span className="font-bold px-2">{name}</span>
        <span>{message} 🙏🏻</span>
      </div>
    </div>
  );
};

export default ChatMessage;
