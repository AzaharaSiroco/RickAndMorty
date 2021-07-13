import React from "react";
const notFound = "../images/rickmorty.jpg";

const NotFound = () => {
  return (
    <div className="container-notFound__text">
      <p>¿Has bebido? No existe nadie con ese nombre en toda la galaxia.</p>
      <p>VUELVE A BUSCAR</p>
      <img className="NotFoundCharacter" src={notFound}></img>
    </div>
  );
};

export default NotFound;
