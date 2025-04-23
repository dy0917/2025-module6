import { useState, useContext } from "react";
import TodoForm from "../components/TodoForm";
import TodoTable from "../components/TodoTable";
import { TodoContext } from "../contexts/TodoContext";

function Home() {
  // const [todoList, setTodoList] = useState(todoListJson);
  const { todoList, addTodoFunction } = useContext(TodoContext);
  // console.log("todoContextObj", todoContextObj);


  return (
    <>
      <div className="container mt-5">
        <TodoForm addTodoFunction={addTodoFunction}></TodoForm>
        <TodoTable
          todoList={todoList}
        ></TodoTable>
      </div>
    </>
  );
}

export default Home;
