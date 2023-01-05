import React from 'react'
import { Link } from 'react-router-dom';
import "./ArticleCard.css"

const ArticleCard = ({ id, section, subsection, title, multimedia}) => {
  return (
    <div className='card'>
      <p>{title}</p>
      <p>{section}</p>
      <p>{subsection}</p>
    </div>
  );
}

export default ArticleCard;