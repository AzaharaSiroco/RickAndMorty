import React from "react";

const FilterBySpecie = (props) => {
  const handleChange = (ev) => {
    props.handleChange({
      value: ev.target.value,
      key: "specie",
    });
  };
  return (
    <>
      <label className="labelFilterSpecie">Especies</label>
      <select
        className="specieButton"
        name="specie"
        id="specie"
        onChange={handleChange}
      >
        <option value="All">All Species</option>
        <option value="Alien">Aliens</option>
        <option value="Human">Human</option>
      </select>
    </>
  );
};

export default FilterBySpecie;
