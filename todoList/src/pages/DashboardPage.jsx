import { useContext } from "react";
import {
  useNavigate,
  Outlet,
  useParams,
  useSearchParams,
  Link,
} from "react-router-dom";
import { TodoContext } from "../contexts/TodoContext";
import { useData } from "../utils/useData";

export default function DashboardPage() {
  // built-in hook in React Router DOM, returns a function
  const navigate = useNavigate();
  const { todoList } = useContext(TodoContext);

  return (
    <div className="DashboardPage componentBox">
      <h1>Dashboard {todoList.length}</h1>
      <div style={{ backgroundColor: "black" }}>
        <Outlet />
      </div>
      {/* see next slide */}
      {/* Will render either <DashboardMessages> when the URL is
"/dash/messages", <DashboardTasks> at "/dash/tasks",
or null if it is "/dash" */}
      <button onClick={() => navigate("/dash/tasks")}>Show Tasks</button>
      <button onClick={() => navigate("/dash/messages")}>Show Messages</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export function DashboardMessages() {
  // const { currentUser } = useUserContext();
  const { mid } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams", searchParams.get("a"));
  console.log("searchParams", searchParams.get("b"));
  // console.log("params", params);

  // const { getTodoById } = useContext(TodoContext);
  // const todo = getTodoById(mid)
  return (
    <div className="DashboardMessages">
      <p>Welcome to your dashboard,</p>
    </div>
  );
}
export function DashboardTasks() {
  const tasks = [
    { id: 1, name: "Learn React" },
    { id: 2, name: "Decide on capstone project" },
    { id: 3, name: "Learn databases" },
  ];
  return (
    <div className="DashboardTasks">
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export function Posts() {
  const [searchParams, setSearchParams] = useSearchParams(); // import this hook
  const limit = searchParams.get("limit") ? searchParams.get("limit") : 5;
  // const postsData = useData(
  //   "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
  // );
  // const handleChangeLimit = (e) => {
  //   setSearchParams({ limit: e.target.value });
  // };
  // the ? means only call map if postsData is not null
  // const postList = postsData.map((post) => (
  //   <li key={post.id}>
  //     <Link to={"/posts/" + post.id}>
  //       Post #{post.id}: {post.title}
  //     </Link>
  //   </li>
  // ));
  return (
    <>
      {/* <ul>{postList}</ul> */}
      <Link to="/posts?limit=10">Load 10 Posts</Link>
    </>
  );
}
