import { useState, useEffect } from "react";
import "./Joker.css";

export default function Joker() {
  const Url = "https://official-joke-api.appspot.com/jokes/random";

  let [joke, setJoke] = useState({});

  let makeJoke = async () => {
    let response = await fetch(Url);
    let jsonResponse = await response.json();
    setJoke({
      setup: jsonResponse.setup,
      punchline: jsonResponse.punchline,
      type: jsonResponse.type,
    });
  };

  useEffect(() => {
    async function makeFirstJoke() {
      makeJoke();
    }
    makeFirstJoke();
  }, []);

  return (
    <div>
      <h1>Joke Maker</h1>
      <h5>Type: {joke.type}</h5>
      <h2>{joke.setup}</h2>
      <p>{joke.punchline}</p>
      <button onClick={makeJoke}>Joke</button>
      <h3></h3>
    </div>
  );
}
