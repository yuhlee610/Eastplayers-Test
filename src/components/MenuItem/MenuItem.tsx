import React from "react";
import "./MenuItem.css";
import { IoIosArrowForward } from "react-icons/io";

interface IMenuItem {
  number: number;
  content: string;
  onClick: () => void;
}

const MenuItem: React.FC<IMenuItem> = ({ number, content, onClick }) => {
  return (
    <div className="menu-item" onClick={onClick}>
      <div className="number">{number}</div>
      <div className="content">{content}</div>
      <IoIosArrowForward
        style={{ marginRight: "12px", color: "rgba(239, 70, 56, 1)" }}
      />
    </div>
  );
};

export default MenuItem;
