import React from "react";
import Check from "./Check";

interface ChatBubbleProps {
  message: string;
  sender: "user" | "bot";
  timestamp: string;
  status?: boolean;
  //   avatar?: string;
  name?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  sender,
  status,
  timestamp,
  //   avatar,
  name,
}) => {
  return (
    <div
      className={`flex gap-2.5 mb-2 ${
        sender === "user" ? "justify-end" : "justify-start"
      } mx-auto`}
    >
      {/* {sender === "bot" && (
        <img
          src={avatar}
          alt={`${name} image`}
          className="w-10 h-11 rounded-full"
        />
      )} */}
      <div className="grid">
        <h5
          className={`items-center inline-flex  text-sm font-semibold text-white ${
            sender === "user" ? "justify-end" : "justify-start"
          } pb-0.5 `}
        >
          {name}
        </h5>
        <div className="max-w-md grid">
          <div
            className={`px-3.5 py-2 ${
              sender === "user"
                ? "bg-gray-700/70 text-white"
                : "bg-gray-100 text-black"
            } rounded-3xl ${
              sender === "user" ? "rounded-tr-none" : "rounded-tl-none"
            } justify-start items-center gap-3`}
          >
            <h5 className="text-sm font-normal">{message}</h5>
          </div>
          <div
            className={`items-center inline-flex ${
              sender === "user" ? "justify-end" : "justify-start"
            } mx-4`}
          >
            {sender === "user" && <Check status={status} />}
            <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
              {timestamp}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
