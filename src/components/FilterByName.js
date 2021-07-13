import React from "react";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleChange({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <label className="labelFilterName">Encuentra tu personaje favorito</label>
      <input
        type="text"
        name="name"
        id="name"
        value={props.filterName}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;
