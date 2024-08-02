import React from "react";
import ReactDOM from "react-dom";

const Tooltip = ({ children, style }) => {
  return ReactDOM.createPortal(
    <div
      className="bg-black text-white py-2 px-4 shadow-lg rounded-xl z-50"
      style={style}
    >
      {children}
    </div>,
    document.body
  );
};

export default Tooltip;
