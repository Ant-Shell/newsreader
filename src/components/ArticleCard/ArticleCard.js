import React from 'react'
import { Link } from 'react-router-dom';
import "./ArticleCard.css"

const ArticleCard = ({ id, section, subsection, title, multimedia}) => {
  return (
    <div className='card'>
      <p>{title}</p>
      <p>Section: {section}</p>
      {subsection ? <p>Topic: {subsection}</p> : null}
      <img className="image" src={multimedia[1].url} alt={multimedia[1].caption}></img>
    </div>
  );
}

export default ArticleCard;