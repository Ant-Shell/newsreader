import React from 'react'
import SearchField from '../SearchField/SearchField';
import "./Header.css"

const Header = ({ searchArticles, foundSearchResults }) => {
  return (
    <header className="header" data-cy="header">
      <h1 className='banner' cy-data="banner">Science News Reader</h1>
      <div className='search-container'>
        <SearchField 
          searchArticles={searchArticles}
          foundSearchResults={foundSearchResults}
        />
      </div>
    </header>
  );
}

export default Header