import { useState } from "react";
import CharacterContainer from "./components/CharacterContainer";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

import { DebounceInput } from 'react-debounce-input'

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
        <>
          <DebounceInput className="px-2" placeholder="Ingrese el nombre del personaje" 
          minLength={2} debounceTimeout={500} onChange={event => (reqApi(event.target.value))}
        />
          <CharacterContainer characters={characters} reqApi={reqApi}></CharacterContainer>
        </>
      )
      }
    </Container>
  );
}

export default App;