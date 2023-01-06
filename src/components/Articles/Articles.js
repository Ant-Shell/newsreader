import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'
import "./Articles.css"

const Articles = ({ articles, searchResults, foundSearchResults }) => {

  const listSetter = (bool, original, results) => {
    return !bool ? original : results
  }

  const articleList = listSetter(foundSearchResults, articles, searchResults).map(article => {
    const {id, title, multimedia} = article
    return (
      <ArticleCard 
        id={id}
        title={title}
        multimedia={multimedia}
        key={id}
      />
    )
  })

  return (
    <div className="article-container" data-cy="article-container">
        {articleList}
    </div>
  );
}

export default Articles