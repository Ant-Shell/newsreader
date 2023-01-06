import React from 'react'
import { Link } from 'react-router-dom';
import "./ArticleCard.css"

const ArticleCard = ({ id, title, multimedia}) => {
  return (
    <section className='card' data-cy="card">
    <Link to={`${id}`}><img className="image" src={multimedia[1].url} alt={multimedia[1].caption}></img></Link>
        <p>{title}</p>
    </section>
    
  );
}

export default ArticleCard;