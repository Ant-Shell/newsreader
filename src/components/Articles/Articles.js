import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard';
import "./Articles.css"

const Articles = ({ articles }) => {
  const articleList = articles.map(article => {
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
    <div className="article-container">
        {articleList}
    </div>
  );
}

export default Articles