import React, {useState, useEffect} from 'react'
import {getArticles} from "../../utilities/apiCalls"
import Header from "../Header/Header"
import Articles from "../Articles/Articles"
import Footer from "../Footer/Footer"
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    getArticles('science', setErrorMsg)
    .then(formattedData => setArticles(formattedData))
  },[])

  return (
    <main className="app">
      <Header />
      {errorMsg ? <p>An error has occured</p> : null}
      {!articles.length ? <p>Loading ...</p> : null}
      <Articles articles={articles}/>
      <Footer />
    </main>
  );
}

export default App;
