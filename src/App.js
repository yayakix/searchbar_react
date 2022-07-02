import { useEffect, useState } from 'react';
import './App.css';
import data from './data';

function App() {
  const [monster, setMonster] = useState([])
  useEffect(() => {
    setMonster(data);
    
  }, []) 
  const [currsearch, setCurrSearch] =  useState('')

// function handleChange(e){
//   setCurrSearch(e.target.value)
// }
  
  return (
    <div className="App">
    {currsearch}
    <br/>
      rwar
      <input
        type="search"
        placeholder="search for name"
        // onChange={(e) => handleChange(e)}
          onChange={(e) =>   {const filteredSearch = monster.filter((x) => {
            
          return x.name.includes(e.target.value)
        })
      setMonster(filteredSearch);  
        }}
      />
      {monster.map((x) => {
        // console.log(x.name)
        return <h1>{x.name}</h1>;
      })}

    </div>
  );
}

export default App;
