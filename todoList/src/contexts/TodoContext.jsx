import { createContext, useState } from "react";
export const TodoContext = createContext();

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

export const TodoProvider = (props) => {
  // store the current user in state at the top level
  const [todoList, setTodoList] = useState(todoListJson);
  //   const [todoList, dispatch] = useReducer({}, todoListJson);

  const a = "string";
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
    <TodoContext.Provider
      value={{
        todoList,
        addTodoFunction,
        delTodoFunction,
        toggleCompletedFunction,
        a,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
