import React, {useState, useEffect} from 'react'
import ArticleDetails from "../ArticleDetails/ArticleDetails"
import NotFound from '../NotFound/NotFound'
import "./SingleArticle.css"

const SingleArticle = ({ id, findSingleArticle }) => {
  const [singleArticle, setSingleArticle] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    findSingleArticle(id, setSingleArticle, setError)
  },[id, findSingleArticle])

  return (
    <div className="single-article-container" data-cy="single-article-container">
      { error ? <NotFound />
      : <ArticleDetails singleArticle={singleArticle}/>}
    </div>
  );
}

export default SingleArticle;