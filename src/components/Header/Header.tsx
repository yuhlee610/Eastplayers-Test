import React from "react";
import "./Header.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface IHeader {
  title: string;
  backButton: boolean;
}

const Header: React.FC<IHeader> = ({ title, backButton }) => {
  let naviagte = useNavigate();

  return (
    <header>
      {backButton && (
        <IoIosArrowBack
          style={{ position: "absolute", left: "5px", cursor: "pointer" }}
          onClick={() => naviagte(-1)}
        />
      )}
      <div className="title">{title}</div>
    </header>
  );
};

export default Header;
