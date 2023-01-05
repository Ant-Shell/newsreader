import React, {useState, useEffect} from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import {getArticles} from "../../utilities/apiCalls"
import Header from "../Header/Header"
import Articles from "../Articles/Articles"
import SingleArticle from "../SingleArticle/SingleArticle"
import NotFound from '../NotFound/NotFound'
import Footer from "../Footer/Footer"
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    getArticles('science', setErrorMsg)
    .then(formattedData => setArticles(formattedData))
  },[])

  const Article = () => {
    let params = useParams()
    return <SingleArticle id={params.id}/>
  }

  return (
    <main className="app">
      <Header />
      {errorMsg ? <p>An error has occured</p> : null}
      {!articles.length ? <p>Loading ...</p> : null}
      <Routes>
        <Route path="/" element={<Articles articles={articles}/>}/>
        <Route path=":id" element={<Article />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
