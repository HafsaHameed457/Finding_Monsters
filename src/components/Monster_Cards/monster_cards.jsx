import React from "react";

export default function MonsterCards(props) {
  const monsters = props.monsters;
  return (
    <div
      style={{
        width: "85vw",
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
    >
      {monsters.map((monster) => (
        <div
          style={{
            width: "300px",
            height: "300px",
            background: "black",
            color: "white",
            margin: "10px",
          }}
          key={monster.id}
        >
          <h2>{monster.name}</h2>
          <img
            alt="no img"
            src={`https://robohash.org/${monster.id}?set=set4&size=180x180`}
          />
        </div>
      ))}
    </div>
  );
}
