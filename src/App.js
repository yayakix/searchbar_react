import { useEffect, useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [monster, setMonster] = useState([]);
  useEffect(() => {
    setMonster(data);
  }, []);
  const [currsearch, setCurrSearch] = useState("");

  const filteredSearch = monster.filter((x) => {
    return x.name.toLowerCase().includes(currsearch);
  });

  return (
    <div className="App">
      <br />
      <input
        type="search"
        placeholder="search for name"
        onChange={(e) => {
          setCurrSearch(e.target.value.toLowerCase());
        }}
      />
      {filteredSearch.map((x) => {
        return <h1>name: {x.name}</h1>;
      })}
    </div>
  );
}

export default App;
