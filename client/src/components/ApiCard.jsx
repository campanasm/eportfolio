import { useEffect, useState } from "react";

function ApiCard() {
  const [joke, setJoke] = useState(null);

  const fetchJoke = () => {
    fetch("http://localhost:3001/api/joke")
      .then((res) => res.json())
      .then((data) => setJoke(data))
      .catch((err) => console.error("Error fetching joke:", err));
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="api-card">
      <h3>Random Joke</h3>

      {joke ? (
        <>
          <p><strong>{joke.setup}</strong></p>
          <p>{joke.punchline}</p>
        </>
      ) : (
        <p>Loading joke...</p>
      )}

      <button onClick={fetchJoke} className="joke-btn">
        Get New Joke
      </button>
    </div>
  );
}

export default ApiCard;