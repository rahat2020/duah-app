import React, { useState } from "react";

const Accordions = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div className="rounded-lg border border-gray-300 p-2">
        <div
          className={`flex justify-between items-center p-3 cursor-pointer ${
            isOpen ? "bg-green-500 text-white" : "bg-green-200"
          }`}
          onClick={toggleAccordion}
        >
          <h3 className="font-bold">{title}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="p-3 border-t border-gray-300">{content}</div>
        )}
      </div>
    </div>
  );
};

export default Accordions;
