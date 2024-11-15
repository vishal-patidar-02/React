import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sampleTask", id: uuidv4(), isDone: false },
  ]);
  let [newtodo, setNewTodo] = useState("");

  let addTask = () => {
    setTodos([...todos, { task: newtodo, id: uuidv4(), isDone: false }]);
    setNewTodo("");
  };
  let enteringTodo = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    let remainTodo = todos.filter((todo) => todo.id != id);
    setTodos(remainTodo);
  };

  let UpperCaseAll = () => {
    setTodos((previousTodo) =>
      previousTodo.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let UpperCaseOne = (id) => {
    setTodos((previousTodo) =>
      previousTodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let AllTaskDone = () => {
    setTodos((previousTodo) =>
      previousTodo.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let taskDone = (id) => {
    setTodos((previousTodo) =>
      previousTodo.map((todo) => {
        if ((todo.id == id)) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return {
            ...todo,
          };
        }
      })
    );
  };

  let styles = { textDecoration: "line-through", color: "red" };

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
          return (
            <li key={todo.id}>
              {todo.isDone ? (
                <span style={styles}>{todo.task}</span>
              ) : (
                <span style={{ color: "green" }}>{todo.task}</span>
              )}
              &nbsp; &nbsp;&nbsp;
              <button onClick={() => {deleteTodo(todo.id);}}>Delete</button>&nbsp;
              <button onClick={() => {UpperCaseOne(todo.id);}}>UpperCaseOne</button>&nbsp;
              <button onClick={() => {taskDone(todo.id);}}>Done</button>&nbsp;
            </li>
          );
        })}
      </ul>
      &nbsp; &nbsp;
      <hr />
      <button onClick={UpperCaseAll}>UpperCase All</button>&nbsp;
      <button onClick={AllTaskDone}>AllTaskDone</button>
    </>
  );
}
