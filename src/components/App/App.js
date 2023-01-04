import React, {useState, useEffect} from 'react'
import {getArticles} from "../../utilities/apiCalls"
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]) // pass as prop
  const [errorMsg, setErrorMsg] = useState('') // render error somewhere

  useEffect(() => {
    getArticles('science', setErrorMsg)
    .then(formattedData => setArticles(formattedData))
  },[])

  return (
    <main className="app">
   
    </main>
  );
}

export default App;
