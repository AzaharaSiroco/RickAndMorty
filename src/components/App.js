import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/getDataFromApi";
import "../stylesheets/App.css";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  useEffect(() => {
    getDataFromApi().then((data) => {
      setcharacter(data);
    });
  }, []);

  const [character, setcharacter] = useState([]);

  const [filterNameInput, setfilterNameInput] = useState("");

  const [filterSpecie, setfilterSpecie] = useState("");

  const [filterStatus, setfilterStatus] = useState("");

  const [filterLocation, setfilterLocation] = useState("");

  const [filterSort, setfilterSort] = useState("false");

  const handleChange = (data) => {
    if (data.key === "name") {
      setfilterNameInput(data.value);
    } else if (data.key === "specie") {
      setfilterSpecie(data.value);
    } else if (data.key === "status") {
      setfilterStatus(data.value);
    } else if (data.key === "location") {
      setfilterLocation(data.value);
    } else if (data.key === "sort") {
      setfilterSort(data.vaulue);
    }
  };

  const filterData = character
    .filter((character) => {
      return character.name
        .toLowerCase()
        .includes(filterNameInput.toLowerCase());
    })
    .filter((character) => {
      if (filterSpecie === "") {
        return true;
      } else {
        return character.species === filterSpecie;
      }
    })
    .filter((character) => {
      if (filterStatus === "") {
        return true;
      } else {
        return character.status === filterStatus;
      }
    })
    .filter((character) => {
      return character.location
        .toLowerCase()
        .includes(filterLocation.toLowerCase());
    });
  if (filterSort) {
    character.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  // DETALLE DE PERSONAJE
  const renderCharacterDetail = (props) => {
    //console.log(props);
    const pathId = parseInt(props.match.params.id);
    console.log(character);
    const pathCharacter = character.find((c) => c.id === pathId);

    //console.log(pathCharacter);
    if (pathCharacter === undefined) {
      return <p>Eyy no tan rápido, colega.</p>;
    } else {
      return (
        <CharacterDetail
          image={pathCharacter.image}
          name={pathCharacter.name}
          species={pathCharacter.species}
          origin={pathCharacter.origin}
          episode={pathCharacter.episode}
          status={pathCharacter.status}
        />
      );
    }
  };

  return (
    <>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Filters handleChange={handleChange} />
            <CharacterList character={filterData} />
          </Route>
          <Route path="/character/:id" render={renderCharacterDetail}></Route>
          <Route path="*">
            1
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
};

export default App;
