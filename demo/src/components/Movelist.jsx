import { useState } from "react";
import AddMovieForm from "./AddMovieForm";

const movies = [
  {
    id: "1",
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men find redemption.",
  },
  {
    id: "2",
    title: "The Dark Knight",
    year: 2008,
    synopsis: "Batman fights the menace known as the Joker.",
  },
  {
    id: "3",
    title: "Interstellar",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space.",
  },
];
export default function MoviesList() {
  const [currentMovies, setCurrentMovies] = useState(movies);

  const handleReverseMovies = () => {
    // first clone the original, so we don’t mutate itasdf
    let newMovies = [...currentMovies];
    newMovies.push({
      id: "4",
      title: "Interstellar new",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    });
    newMovies.reverse(); // 2. modify the clone
    setCurrentMovies(newMovies); // 3. set updated clone in state
  };

  const handleAddMovie = (newMovie) => {
    newMovie.id = currentMovies.length + 1; // unreliable but succinct
    setCurrentMovies([...currentMovies, newMovie]);
  };

  return (
    <>
      <AddMovieForm onAddMovie={handleAddMovie} />

      <div className="MoviesList componentBox">
        <ul>
          {" "}
          {/* iterate over each movie, print the title in a list */}
          {currentMovies.map((movie) => (
            <Movie key={movie.id} {...movie}></Movie>
          ))}
        </ul>
      </div>
      <button onClick={handleReverseMovies}>Reverse List</button>
    </>
  );
}

function Movie({ title, year, synopsis }) {
  return (
    <li>
      <h3>{title}</h3>
      <span>({year})</span>
      <div>{synopsis}</div>
    </li>
  );
}
