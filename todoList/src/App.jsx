import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoTable from "./components/TodoTable";

const todoListJson = [
  {
    id: 1,
    title: "Do something shopping",
    desc: "Do something shopping",
    completed: true,
  },
  {
    id: 2,
    title: "Prepare class",
    desc: "Prepare class",
  },
];

function App() {
  const [todoList, setTodoList] = useState(todoListJson);
  const addTodoFunction = (todo) => {
    const nextId = Math.max(...todoList.map((todo) => todo.id)) + 1;
    const newTodo = { ...todo, id: nextId };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  const delTodoFunction = (id) => {
    const copyTodoList = [...todoList];
    const targetId = copyTodoList.findIndex((todo) => todo.id == id);
    copyTodoList.splice(targetId, 1);
    setTodoList(copyTodoList);
  };

  const toggleCompletedFunction = (id) => {
    const copyTodoList = [...todoList];
    const targetIndex = copyTodoList.findIndex((todo) => todo.id == id);
    const targetTodo = copyTodoList[targetIndex];
    targetTodo.completed = !targetTodo.completed;
    copyTodoList.splice(targetIndex, 1, targetTodo);
    setTodoList(copyTodoList);
  };

  return (
    <>
      <div className="container mt-5">
        <TodoForm addTodoFunction={addTodoFunction}></TodoForm>
        <TodoTable
          todoList={todoList}
          delTodoFunction={delTodoFunction}
          toggleCompletedFunction={toggleCompletedFunction}
        ></TodoTable>
      </div>
    </>
  );
}

export default App;
