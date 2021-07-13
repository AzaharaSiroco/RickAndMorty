import React from "react";

const FilterByLocation = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleChange({
      value: ev.target.value,
      key: "location",
    });
  };
  return (
    <>
      <label className="labelFilterLocation">Localización</label>
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

export default FilterByLocation;
