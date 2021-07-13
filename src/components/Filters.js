import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import FilterByStatus from "./FilterByStatus";
import FilterByLocation from "./FilterByLocation";
import FilterBySortName from "./FilterBySortName";

const Filters = (props) => {
  return (
    <section className="filtersContainer">
      <form>
        <FilterByName handleChange={props.handleChange} />
        <FilterByLocation handleChange={props.handleChange} />
        <FilterBySpecie handleChange={props.handleChange} />
        <FilterByStatus handleChange={props.handleChange} />
        <FilterBySortName handleChange={props.handleChange} />
      </form>
    </section>
  );
};

export default Filters;
