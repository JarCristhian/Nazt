import ChatBubble from "@/components/ui/ChatBubble";

interface Props {
  status: boolean;
  name: string;
  id: number;
}
export function Chat({ status, name, id }: Props) {
  return (
    <div className="flex flex-col h-full">
      <div className="w-full grid bg-zinc-900 border-b border-zinc-900 h-16 px-3">
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full"
              alt="Profile"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
            <div className="flex flex-col -space-y-1">
              <span className="text-lg">{name}</span>
              <span className="text-xs opacity-85">Online</span>
            </div>
          </div>

          <div className="flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out transform active:scale-90 hover:bg-zinc-800/80 h-8 w-8 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-2 9a2 2 0 1 1 4 0a2 2 0 0 1-4 0m0 7a2 2 0 1 1 4 0a2 2 0 0 1-4 0"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="scrollbar overflow-y-auto h-[calc(100vh-10rem)]">
        <div className="p-4">
          <ChatBubble
            message="You were the Chosen One! about your services. about your services. about your service about your service"
            sender="bot"
            timestamp="05:14 PM"
          />
          <ChatBubble
            message="I need some information about your services. about your services. about your service about your service."
            sender="user"
            timestamp="05:15 PM"
            status={true}
          />
          <ChatBubble
            message="You were the Chosen One! about your services. about your services. about your service about your service"
            sender="bot"
            timestamp="05:14 PM"
          />
          <ChatBubble
            message="I need some information about your services. about your services."
            sender="user"
            timestamp="05:15 PM"
            status={true}
          />
          <ChatBubble
            message="You were the Chosen One! about your services. about your services. about your service about your service"
            sender="bot"
            timestamp="05:14 PM"
          />
          <ChatBubble
            message="I need some information about your services."
            sender="user"
            timestamp="05:15 PM"
            status={false}
          />
          <ChatBubble
            message="You were the Chosen One! about your services. about your services. about your service about your service"
            sender="bot"
            timestamp="05:14 PM"
          />
          <ChatBubble
            message="I need some information about your services."
            sender="user"
            timestamp="05:15 PM"
            status={false}
          />
          <ChatBubble
            message="You were the Chosen One! about your services. about your services. about your service about your service"
            sender="bot"
            timestamp="05:14 PM"
          />
          <ChatBubble
            message="I need some information about your services."
            sender="user"
            timestamp="05:15 PM"
            status={false}
          />
          <ChatBubble
            message="You were the Chosen One! about your services. about your services. about your service about your service"
            sender="bot"
            timestamp="05:14 PM"
          />
          <ChatBubble
            message="I need some information about your services."
            sender="user"
            timestamp="05:15 PM"
            status={false}
          />
          <ChatBubble
            message="You were the Chosen One! about your services. about your services. about your service about your service"
            sender="bot"
            timestamp="05:14 PM"
          />
          <ChatBubble
            message="I need some information about your services."
            sender="user"
            timestamp="05:15 PM"
            status={false}
          />
          <ChatBubble
            message="You were the Chosen One! about your services. about your services. about your service about your service"
            sender="bot"
            timestamp="05:14 PM"
          />
          <ChatBubble
            message="I need some information about your services."
            sender="user"
            timestamp="05:15 PM"
            status={false}
          />
        </div>
      </div>
      <div className="flex items-center gap-1 w-full bg-zinc-900 h-16 py-3 px-1">
        <div className="flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out transform active:scale-90 hover:bg-zinc-800/80 h-8 w-10 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.7em"
            height="1.7em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.5 12.5h-5q-.213 0-.356-.144T6 11.999t.144-.356t.356-.143h5v-5q0-.213.144-.356T12.001 6t.356.144t.143.356v5h5q.213 0 .356.144t.144.357t-.144.356t-.356.143h-5v5q0 .213-.144.356t-.357.144t-.356-.144t-.143-.356z"
            ></path>
          </svg>
        </div>

        <input
          type="text"
          id="default-search"
          className="block w-full pl-2 py-2 text-sm font-normal 
            shadow-xs text-gray-200 bg-transparent border border-gray-700 rounded-lg
             placeholder-gray-500 focus:outline-none leading-relaxed"
          placeholder="Type your message..."
        />

        <div className="flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out transform active:scale-90 hover:bg-zinc-800/80 h-8 w-10 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M14.76 12H6.832m0 0c0-.275-.057-.55-.17-.808L4.285 5.814c-.76-1.72 1.058-3.442 2.734-2.591L20.8 10.217c1.46.74 1.46 2.826 0 3.566L7.02 20.777c-1.677.851-3.495-.872-2.735-2.591l2.375-5.378A2 2 0 0 0 6.83 12"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
