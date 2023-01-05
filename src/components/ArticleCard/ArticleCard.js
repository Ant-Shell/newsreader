import React from 'react'
import { Link } from 'react-router-dom';
import "./ArticleCard.css"

const ArticleCard = ({ id, title, multimedia}) => {
  return (
    <Link to={`${id}`}>
    <div className='card'>
      <p>{title}</p>
      {/* <img className="image" src={multimedia[1].url} alt={multimedia[1].caption} /> */} {/* Should be background - fix this later */}
    </div>
    </Link>
  );
}

export default ArticleCard;