import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  let [todos, setTodos] = useState([{ task: "sampleTask", id: uuidv4() }]);
  let [newTodo, setnewTodo] = useState("");
  function AddNewTask() {
    setTodos((prev) => {
      return [...prev, { task: newTodo, id: uuidv4() }];
    });
    setnewTodo("");
  }

  function updateTaskValue(e) {
    setnewTodo(e.target.value);
  }

  function deleteTask(id) {
    let prevTodo = todos.filter((prevTodo) => prevTodo.id != id);
    setTodos(prevTodo);
  }

  let upperCaseAll = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        return { ...todo, task: todo.task.toUpperCase() };
      })
    );
  };

  let upperCase = (id) => {
        setTodos((prevTodo) =>
          prevTodo.map((todo) => {
            if(todo.id === id) {
              return { ...todo, task: todo.task.toUpperCase() };
            }
            else {
              return todo;
            }
          })
        )
      }

  return (
    <>
      <div>
        <br />
        <input
          type="text"
          placeholder="Todo Task"
          value={newTodo}
          onChange={updateTaskValue}
        />
        <button onClick={AddNewTask}> Add Task </button>
        <br />
        <hr />
        <h4> Task Todo </h4>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {" "}
              {todo.task} &nbsp;{" "}
              <button onClick={() => deleteTask(todo.id)}> Delete </button>{" "}
              &nbsp;{" "}
              <button onClick={() => upperCase(todo.id)}> UpperCase </button>{" "}
            </li>
          );
        })}
      </ul>

      <button onClick={upperCaseAll}> Update button </button>
    </>
  );
}

export default App;
