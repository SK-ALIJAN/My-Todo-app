import { useState } from "preact/hooks";
import "./app.css";
import axios, { Axios } from "axios";
import Todo_display from "./Todo_display";

export function App() {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = async () => {
    const newTodo = { todo, status: false };
    if (!todo) {
      alert("please fill the box before submitting!");
    } else {
      try {
        const data = await axios.post("http://localhost:8080/todo", newTodo);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <h1 className="title">My todo app</h1>
      <div className="inputBox">
        <input
          type="text"
          placeholder="Enter your Todo"
          value={todo}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Submit</button>
      </div>

      <Todo_display />
    </>
  );
}
