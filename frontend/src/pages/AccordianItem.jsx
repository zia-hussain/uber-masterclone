import React from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="relative">
      {/* Indicator Bar */}
      <div
        className={`absolute right-0 w-0.5 transition-all duration-300 ${
          isOpen ? "bg-black h-full" : "bg-gray-200 h-8"
        }`}
      />

      {/* Accordion Content */}
      <div className="pr-6">
        <button className="w-full text-right py-4" onClick={onClick}>
          <h3
            className={`text-lg font-bold transition-colors ${
              isOpen ? "text-black" : "text-gray-800"
            }`}
          >
            {title}
          </h3>
        </button>

        {/* Collapsible Content */}
        <div
          className={`grid transition-all duration-300 ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="pb-4 text-gray-600 text-right">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
