import React from 'react';
import './App.css';
import Search from './components/search/Search.jsx';

function App() {

    const handleOnSearchChange = (searchData) =>{
      
    }

    return (
        <div className='container'>          
            <Search onSearchChange={handleOnSearchChange}></Search>
        </div>
    );
}

export default App;
