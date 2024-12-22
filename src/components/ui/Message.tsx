import React from "react";
import Check from "./Check";

interface MessageProps {
  message: string;
  count?: number;
  timestamp: string;
  status?: boolean;
  avatar?: string;
  name: string;
}

const Message: React.FC<MessageProps> = ({
  message,
  count,
  status,
  timestamp,
  avatar,
  name,
}) => {
  return (
    <div className="flex p-2 items-center gap-2.5 select-none cursor-pointer  hover:bg-zinc-800/50">
      <div className="relative block min-w-[40px] min-h-[40px]">
        <img
          className="w-10 h-10 rounded-full object-cover"
          alt="Profile"
          src={avatar}
        />
        {status && (
          <span className="bottom-0 left-7 absolute w-3 h-3 bg-emerald-500 border-2 border-gray-900 rounded-full"></span>
        )}
      </div>

      <div className="flex flex-col w-full border-b border-zinc-700/60 -mt-1 p-1">
        <div className="flex items-center justify-between">
          <span className="">{name}</span>
          <span className="text-xs text-gray-400">{timestamp}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {count && <Check status={false} />}
            <span className="text-xs text-gray-400 line-clamp-1">
              {message}
            </span>
          </div>
          {count && (
            <div className="flex justify-center min-w-4 min-h-4 rounded-full font-bold text-[10px] bg-green-500">
              {count}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
