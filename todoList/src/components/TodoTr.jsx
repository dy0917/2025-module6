export default function TodoTr({
  todo,
  delTodoFunction,
  toggleCompletedFunction,
}) {
  const delBtnClick = () => {
    delTodoFunction(todo.id);
  };
  const completedOnclick = () => {
    toggleCompletedFunction(todo.id);
  };
  return (
    <tr>
      <th scope="row">{todo.id}</th>
      <td
        className={` demo-class ${
          todo.completed ? "text-decoration-line-through" : ""
        }`}
      >
        {todo.title}
      </td>
      <td className={todo.completed ? "text-decoration-line-through" : ""}>
        {todo.desc}
      </td>
      <td>
        <button className="btn btn-danger" onClick={delBtnClick}>
          Del
        </button>

        <input
          className="form-check-input"
          type="checkbox"
          defaultChecked={todo.completed}
          id={"checkDefault" + todo.id}
          onClick={completedOnclick}
        />
        <label className="form-check-label" htmlFor={"checkDefault" + todo.id}>
          Completed
        </label>
      </td>
    </tr>
  );
}
