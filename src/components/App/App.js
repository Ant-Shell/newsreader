import React, {useState, useEffect} from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import {getArticles} from "../../utilities/apiCalls"
import Header from "../Header/Header"
import Articles from "../Articles/Articles"
import SingleArticle from "../SingleArticle/SingleArticle"
import NotFound from '../NotFound/NotFound'
import Footer from "../Footer/Footer"
import './App.css'

const App = () => {
  const [articles, setArticles] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [foundSearchResults, setfoundSearchResults] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    getArticles('science', setErrorMsg)
    .then(formattedData => setArticles(formattedData))
  },[])

  const findSingleArticle = (id, stateHandler, errorHandler) => {
    const singleArticle = articles.find(article => article.id === id)

    if (!singleArticle) {
      errorHandler(true)
    } else {
      errorHandler(false)
      stateHandler(singleArticle)
    }
  }

  const searchArticles = (input) => {
    const locateArticle = articles.filter(article => article.title.toUpperCase().includes(input.toUpperCase()))
    if(!input || !locateArticle.length) {
      setSearchResults([])
      setfoundSearchResults(false)
    } else {
      setSearchResults(locateArticle)
      setfoundSearchResults(true)
    }
  }

  const Article = () => {
    let params = useParams()
    return <SingleArticle id={params.id} findSingleArticle={findSingleArticle}/>
  }


  return (
    <main className="app">
      <Header 
        searchArticles={searchArticles} 
        foundSearchResults={foundSearchResults}
      />
      {errorMsg ? <p>An error has occured</p> : null}
      {!articles.length ? <p>Loading ...</p> : null}
      <Routes>
        <Route 
          path="/" 
          element={
          <Articles 
            articles={articles} 
            searchResults={searchResults}
            foundSearchResults={foundSearchResults}
            />
          }/>
        <Route path=":id" element={<Article />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </main>
  );
}

export default App
