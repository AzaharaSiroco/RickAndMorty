import React from "react";
import { Link } from "react-router-dom";

const Character = (props) => {
  const iconSpecie = () => {
    if (props.character.species === "Alien") {
      return <i className="fas fa-rocket fa-specie"></i>;
    } else if (props.character.species === "Human") {
      return <i className="fas fa-user fa-specie"></i>;
    }
  };

  const iconLocation = () => {
    if (props.character.location === "Earth (Replacement Dimension)") {
      return <i className="fas fa-globe-africa"></i>;
    } else if (props.character.species !== "Earth") {
      return <i className="fas fa-satellite"></i>;
    }
  };
  return (
    <Link to={`/character/${props.character.id}`}>
      <div className="cardCharacter">
        <img
          className="photo"
          src={props.character.image}
          alt={`Aquí está ${props.name}`}
        />
        <h5 className="character_name">{props.character.name}</h5>
        <p className="character_specie">
          {props.character.species}
          {iconSpecie()}
        </p>
        <p className="character_location">
          {props.character.location}
          {iconLocation()}
        </p>
      </div>
    </Link>
  );
};

export default Character;
