import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  let [todos, setTodos] = useState([{task: "sampleTask", id: uuidv4()}]);
  let [newtodo, setNewTodo] = useState("");

  let addTask = () => {
    console.log("task added");
    setTodos([...todos, {task: newtodo, id: uuidv4()}]);
    setNewTodo("");
  };
  let enteringTodo = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={newtodo}
        placeholder="Enter your task"
        onChange={enteringTodo}
      />
      <button onClick={addTask}>Add Task</button>
      <br />
      <br />
      <hr />
      <h2>Task Todo</h2>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.task}</li>;
        })}
      </ul>
    </>
  );
}
