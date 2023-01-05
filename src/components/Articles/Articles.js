import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard';
import "./Articles.css"

const Articles = ({ articles }) => {
  const articleList = articles.map(article => {
    const {section, subsection, title, mutimedia} = article
    return (
      <ArticleCard 
        section={section}
        subsection={subsection}
        title={title}
        mulitmedia={mutimedia}
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