import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Data from './components/jsondata/Data.json';

function App() {
  return (
    <div>
      <SearchBar data={Data} />
    </div>
  )
}

export default App
