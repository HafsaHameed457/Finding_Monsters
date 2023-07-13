import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import SearchBox from "./components/searchbox/searchbox";
import MonsterCards from "./components/Monster_Cards/monster_cards";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]); // filtered monsters
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField.toLowerCase());
      })
    );
  }, [searchField]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setMonsters(data));
  }, []);

  return (
    <div className="App">
      <SearchBox placeholder="search monsters" changeHandler={onSearchChange} />
      <MonsterCards monsters={filteredMonsters} />
    </div>
  );
}

export default App;
