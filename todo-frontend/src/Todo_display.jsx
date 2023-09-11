import axios from "axios";
import { useEffect, useState } from "preact/hooks";
import React from "react";

const Todo_display = () => {
  let [Tododata, setTodoData] = useState([]);
  useEffect(() => {
    TodoApi();
  }, []);

  async function TodoApi() {
    const data = await axios("http://localhost:8080/todo");
    setTodoData(data.data.data);
  }

  return (
    <div>
      {Tododata.map((ele) => {
        return (
          <div>
            <p>{ele.todo}</p>
            <button>Mark as Complete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo_display;
