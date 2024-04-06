"use client"
import React from 'react';

interface ChatMessageProps {
  message: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const copyToClipboard = () => {
    //show message
  };

  return (
    <div className="flex items-center">
      <div className="flex-1 text-black ml-2 text-lg">{message}</div>
      <button
        className="ml-2 px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none"
        onClick={copyToClipboard}
      >
        decrypt
      </button>
    </div>
  );
};

export default ChatMessage;
