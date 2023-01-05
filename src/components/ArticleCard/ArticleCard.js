import React from 'react'
import "./ArticleCard.css"

const ArticleCard = ({ section, subsection, title, multimedia}) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <p>{section}</p>
      <p>{subsection}</p>
    </div>
  );
}

export default ArticleCard;