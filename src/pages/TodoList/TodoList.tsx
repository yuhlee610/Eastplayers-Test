import React, { useReducer, useState } from "react";
import Header from "../../components/Header/Header";
import InputContainer from "../../components/InputContainer/InputContainer";
import "./TodoList.css";

interface ITodoItem {
  text: string;
  id: number;
  done: boolean;
}

interface IAction {
  type: string;
  payload?: ITodoItem | number;
}

const ADD_TODO = "ADD_TODO";
const CHANGE_STATUS = "CHANGE_STATUS";

const todoReducer = (state: ITodoItem[], action: IAction) => {
  switch (action.type) {
    case ADD_TODO:
      if (
        action.payload &&
        typeof action.payload !== "number" &&
        action.payload.text.trim() !== ""
      ) {
        return [...state, action.payload];
      }
    case CHANGE_STATUS:
      const oldState = [...state];
      if (action.payload && typeof action.payload === "number") {
        const index = oldState.findIndex((ele) => ele.id === action.payload);
        if (index !== -1) {
          oldState[index].done = !oldState[index].done;
        }
      }
      return oldState;
    default:
      return state;
  }
};

const TodoList = () => {
  const [todoList, dispatch] = useReducer(todoReducer, []);
  const [inputTodo, setInputTodo] = useState<string>("");

  const changeTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(event.target.value);
  };

  const addTodoItemHandler = () => {
    dispatch({
      type: ADD_TODO,
      payload: {
        id: new Date().getTime(),
        text: inputTodo,
        done: false,
      },
    });
    setInputTodo("");
  };

  return (
    <div className="todo-list">
      <Header title="Todo list" backButton />
      <InputContainer>
        <input
          type="text"
          placeholder="Search"
          onChange={changeTextHandler}
          value={inputTodo}
        />
        <button onClick={addTodoItemHandler}>Add</button>
      </InputContainer>
      {todoList.length !== 0 && (
        <div className="status">
          There are{" "}
          <span>
            {todoList.filter((todoItem) => todoItem.done === false).length}
          </span>{" "}
          tasks left out of {todoList.length} tasks
        </div>
      )}
      <ul>
        {todoList.length !== 0 &&
          todoList.map((todoItem) => (
            <li
              key={todoItem.id}
              onClick={() => {
                dispatch({
                  type: CHANGE_STATUS,
                  payload: todoItem.id,
                });
              }}
            >
              &bull;{" "}
              <span
                style={{
                  textDecorationLine: todoItem.done ? "line-through" : "none",
                }}
              >
                {todoItem.text}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
