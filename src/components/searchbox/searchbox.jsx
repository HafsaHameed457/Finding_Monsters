import React from "react";

export default function SearchBox(props) {
  return (
    <input
      type="search"
      placeholder={props.placeholder}
      onChange={props.changeHandler}
      style={{ padding: "10px", margin: "10px" }}
    />
  );
}
