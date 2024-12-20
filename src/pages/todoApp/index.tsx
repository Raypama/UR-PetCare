// import React from 'react'

import { useState } from "react";
import MainTemplate from "../../components/templates/MainTemplate";
import { LuPencilLine } from "react-icons/lu";
import { IoAddCircleSharp, IoTrash } from "react-icons/io5";

interface Todo {
  id: number;
  task: string;
  complete: boolean;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState<number | null>();

  const addTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      task: text,
      complete: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) return;
    console.log("ada yang baru");

    if (editId) {
      updateTodo(editId, text);
    } else {
      addTodo();
    }

    setText("");
  };

  const updateTodo = (id: number, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, task: newText } : todo))
    );
    setEditId(null);
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleEdit = (id: number, textEdited: string) => {
    setEditId(id);
    setText(textEdited);
  };
  // console.log(todos);

  return (
    <MainTemplate pageTitle="Todo App">
      <div className="h-screen  mt-40 ">
        <div className="flex flex-col justify-center ">
          <div className="mx-auto mb-6">
            <h2 className="text-black text-2xl font-bold">Todo App</h2>
          </div>
          <div className=" border h-32 shadow-md bg-gray-200  rounded w-80 mx-auto text-center ">
            <form
              action=""
              className="flex gap-3 justify-center   py-10  "
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="rounded  border p-3"
                value={text}
                onChange={handleChange}
                placeholder={"Write Here"}
              />
              <button className="bg-red-400 w-12 rounded shadow-md font-semibold text-3xl p-3 flex justify-center items-center ease-in-out hover:bg-red-300 duration-300">
                <IoAddCircleSharp size={20} />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-5 mx-auto rounded w-4/6 border shadow-md p-5">
          <h1 className="text-2xl font-semibold text-center w border-b-2  ">
            List Todo
          </h1>
          <ul className="mt-4">
            {todos.map((item) => (
              <li key={item.id} className="flex justify-between pb-2 ">
                <p
                  onClick={() => handleComplete(item.id)}
                  className={
                    item.complete
                      ? "line-through cursor-pointer"
                      : "none cursor-pointer"
                  }
                >
                  {item.task}
                </p>
                <div className="flex items-center gap-2 ">
                  <LuPencilLine
                    onClick={() => handleEdit(item.id, item.task)}
                    className="cursor-pointer hover:text-green-700 duration-200"
                  />
                  <IoTrash
                    onClick={() => deleteTodo(item.id)}
                    className="cursor-pointer hover:text-red-700 duration-200"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainTemplate>
  );
}

export default TodoApp;
