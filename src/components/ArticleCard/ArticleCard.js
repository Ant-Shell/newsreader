import React from 'react'
import { Link } from 'react-router-dom';
import "./ArticleCard.css"

const ArticleCard = ({ id, section, subsection, title, multimedia}) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <p>{section}</p>
      <p>{subsection}</p>
    </div>
  );
}

export default ArticleCard;