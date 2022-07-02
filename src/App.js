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
   const filteredSearch = monster.filter((x) => {
     return x.name.toLowerCase().includes(currsearch);
   });
  
  return (
    <div className="App">
    {currsearch}
    <br/>
      rwar
      <input
        type="search"
        placeholder="search for name"
        // onChange={(e) => handleChange(e)}
          onChange={(e) =>   {
            setCurrSearch(e.target.value.toLowerCase())
         
        }}
      />
      {filteredSearch.map((x) => {
        // console.log(x.name)
        return <h1>{x.name}</h1>;
      })}

    </div>
  );
}

export default App;
