import React from 'react'
import { Link } from 'react-router-dom';
import "./ArticleCard.css"

const ArticleCard = ({ id, title, multimedia}) => {
  return (
    <Link to={`${id}`}>
    <section className='card' data-cy="card">
      <p>{title}</p>
      {/* <img className="image" src={multimedia[1].url} alt={multimedia[1].caption} /> */} {/* Should be background - fix this later */}
    </section>
    </Link>
  );
}

export default ArticleCard;