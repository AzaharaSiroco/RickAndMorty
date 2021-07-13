import React from "react";

const FilterByStatus = (props) => {
  const handleChange = (ev) => {
    props.handleChange({
      value: ev.target.value,
      key: "status",
    });
  };
  return (
    <>
      <label className="labelFilterStatus">¿Está vivo?</label>
      <select
        className="statusButton"
        name="status"
        id="status"
        onChange={handleChange}
      >
        <option value="">AllStatus</option>
        <option value="unknown">unknown</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
      </select>
    </>
  );
};

export default FilterByStatus;
