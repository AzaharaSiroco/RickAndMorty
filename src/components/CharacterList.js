import React from "react";
import Character from "./Character";

const CharacterList = (props) => {
  const htmlElements = props.character.map((characters) => {
    return (
      <ul className="eachCharacter" key={characters.id}>
        <Character character={characters} />
      </ul>
    );
  });
  return htmlElements.length === null ? (
    <h1>PERSONAJE NO ENCONTRADO</h1>
  ) : (
    <ul className="cardListDeco">{htmlElements}</ul>
  );
};

export default CharacterList;
