import { useState } from "react";

export default function TodoForm({ addTodoFunction }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const todo = { title, desc };
    addTodoFunction(todo);
    console.log(todo);
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descInput" className="form-label">
            desc
          </label>
          <input
            name="desc"
            type="text"
            value={desc}
            className="form-control"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            id="descInput"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
