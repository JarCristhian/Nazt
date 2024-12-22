import React from "react";

interface Props {
  children: React.ReactNode;
}

const ButtonUI: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out transform active:scale-90 hover:bg-zinc-800/80 h-12 w-12 rounded-lg">
      {children}
    </div>
  );
};

export default ButtonUI;
