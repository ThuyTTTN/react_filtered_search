import './App.css';
import React, { useState } from 'react';

function App() {
  //list of items
  const fruit = [
    "apple",
    "orange",
    "banana",
    "mango",
    "nectarine",
    "jackfruit",
    "mandarine orange",
    "apricot"
  ];

  const [ search, setSearch ] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filtered = !search ? fruit : fruit.filter((fruit) => fruit.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="App">
      <h1>Hello</h1>
      <div className='search-txt'>Search: {" "}</div>
        <input type="text" value={search} onChange={handleSearchChange} />
        {filtered.map((fruit) => {
          return (
            <p>{fruit}</p>
          )
        })}
      </div>
      
    
  );
}

export default App;
