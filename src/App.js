import { useState } from "react";
import CharacterContainer from "./components/CharacterContainer";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async (name) => {
    const api = await fetch(
      `https://thesimpsonsquoteapi.glitch.me/quotes?character=${ name == "" ? " " : name }`
    );
    const frase = await api.json();
    setCharacters(frase);
  };

  return (
    <Container>
      <Header />
      {!characters ? (
        <Welcome reqApi={reqApi} />
      ) : (
          <CharacterContainer characters={characters} reqApi={reqApi}></CharacterContainer>
      )
      }
    </Container>
  );
}

export default App;