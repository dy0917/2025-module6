import TodoTr from "./TodoTr";

export default function TodoTable({ todoList }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Desc</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo) => {
            return <TodoTr key={todo.id} todo={todo}></TodoTr>;
          })}
        </tbody>
      </table>
    </>
  );
}
