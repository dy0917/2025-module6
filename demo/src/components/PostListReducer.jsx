import { useEffect, useReducer } from "react"; // continued on next slide
import axios from "axios"; // first do 'npm install axios' - alternative to fetch

function reducer(postsResult, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, posts: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, posts: [], error: action.payload };
    default:
      return { ...postsResult, loading: false };
  }
}

export default function PostListReducer() {
  const [postsState, dispatch] = useReducer(reducer, {
    // initial state for postsResult state variable
    loading: true, // true when loading and no data in posts
    posts: [], // empty until data is fetched
    error: "", // empty unless there was an error
  });
  useEffect(() => {
    setTimeout(
      () =>
        axios
          .get("https://jsonplaceholder.typicode.com/posts?_limit=5") // modify this URL to test the error case
          .then((response) => {
            // object passed to dispatch holds all data needed for updating state: both type of update and associated data
            dispatch({ type: "FETCH_SUCCESS", payload: response.data }); // dispatch calls reducer function and triggers re-render
          })
          .catch((error) => {
            dispatch({ type: "FETCH_ERROR", payload: error.message }); // lets us handle different types of state changes differently
          }),
      1000
    );
  }, []);

  useEffect(() => {
    console.log("loaded");
  }, [postsState]);

  return (
    <div className="PostList componentBox">
      {postsState.loading ? (
        <div>Loading posts...</div>
      ) : (
        postsState.posts.map(
          (
            post // list of posts is just one of the things stored in the postsResult state object
          ) => (
            <div className="post" key={post.id}>
              <h3>
                Post #{post.id}: {post.title}
              </h3>
              <p>{post.body}</p>
            </div>
          )
        )
      )}
      <div className="error">{postsState.error}</div>
    </div>
  );
}
