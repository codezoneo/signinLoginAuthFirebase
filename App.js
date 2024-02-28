import React, { useState, useEffect } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newMovieData, setNewMovieData] = useState({
    title: "",
    openingText: "",
    releaseDate: "",
  });

  useEffect(() => {
    fetchMoviesHandler();
  }, []); // Fetch movies on initial render

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMovieData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddMovie = () => {
    console.log(newMovieData);
    // Here you can add logic to send the new movie data to your backend or update state, etc.
  };

  const handleDeleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    // Here you can add logic to delete the movie from the backend
  };

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => ({
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      }));

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  let content = null;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else if (movies.length > 0) {
    content = <MoviesList movies={movies} onDeleteMovie={handleDeleteMovie} />;
  } else {
    content = <p>Found no movies</p>;
  }

  return (
    <React.Fragment>
      <section>
        <form className="add-movie-form">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newMovieData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="openingText">Opening Text</label>
            <textarea
              id="openingText"
              name="openingText"
              value={newMovieData.openingText}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="releaseDate">Release Date</label>
            <input
              type="text"
              id="releaseDate"
              name="releaseDate"
              value={newMovieData.releaseDate}
              onChange={handleInputChange}
            />
          </div>
          <button type="button" onClick={handleAddMovie}>
            Add Movie
          </button>
        </form>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
