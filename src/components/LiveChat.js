import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div>
      <div className="ml-2 p-2 border border-black h-[600px] bg-slate-100 rounded-lg overflow-scroll flex flex-col-reverse">
        {/* // Do not use index as key */}
        {chatMessages.map((message, index) => (
          <ChatMessage
            name={message.name}
            message={message.message}
            key={index}
          />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(addMessage({ name: "krishna", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-96 border border-black px-2"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button type="submit" className="px-2 mx-2 bg-green-100">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
