import React from "react";
import "./InputContainer.css";

const InputContainer: React.FC = ({children}) => {
  return <div className="input-container">{children}</div>;
};

export default InputContainer;
