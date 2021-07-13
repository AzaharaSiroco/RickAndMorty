import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const specieIcon = () => {
    if (props.species === "Alien") {
      return <i className="fas fa-rocket"></i>;
    } else if (props.species === "Human") {
      return <i className="fas fa-globe-europe"></i>;
    }
  };

  return (
    <article className="eachDetail" key={props.id}>
      <Link to="/">
        <span className="characterDetailClose">Cerrar</span>
      </Link>
      <img
        className="photo_detail"
        src={props.image}
        alt={`Aquí está ${props.name}`}
      />
      <h5 className="character_name_detail">{props.name}</h5>
      <p className="character_specie_detail">
        {props.species} {specieIcon()}
      </p>
      <p className="character_origin_detail">{props.origin} </p>
      <p className="character_episode_detail"> {props.episode} </p>
      <p className="character_status_detail"> {props.status} </p>
      <p className="character_location_detail"> {props.location} </p>
    </article>
  );
};
export default CharacterDetail;
