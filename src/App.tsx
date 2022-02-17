import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MenuItem from "./components/MenuItem/MenuItem";
import { useNavigate } from "react-router-dom";

const App = () => {
  let navigate = useNavigate();
  return (
    <div className="app">
      <Header title="Eastplayers Test" backButton={false} />
      <div className="menu">
        <MenuItem number={1} content='Todo list' onClick={() => navigate('/todo-list')} />
        <MenuItem number={2} content='Country list' onClick={() => navigate('/country-list')} />
      </div>
    </div>
  );
};

export default App;
