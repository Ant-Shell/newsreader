import React, {useState} from 'react'
import "./SearchField.css"

const SearchField = ({ searchArticles, foundSearchResults }) => {
  const [input, setInput] = useState('')

  const searchAction = (e) => {
    setInput(e)
    searchArticles(e)
  }

  const errorRender = () => {
    if (!foundSearchResults && input) {
      return <p className="error-message" data-cy='error-message'>No Results Found.</p>
    }
  }

  return (
    <>
      <form>
        <input 
          type="text"
          placeholder='Search Articles'
          name='search'
          cy-data="search"
          value={input}
          onChange={(e) => searchAction(e.target.value)}
        />
      </form>
      <span className='error-msg-container'>
        {errorRender()}
      </span>
      </>
  );
}

export default SearchField