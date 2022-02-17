import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList/TodoList";
import CountryList from "./pages/CountryList/CountryList";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="todo-list" element={<TodoList />} />
      <Route path="country-list" element={<CountryList />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
