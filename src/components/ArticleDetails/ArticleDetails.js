import React from 'react'
import "./ArticleDetails.css"

const ArticleDetails = ({ singleArticle }) => {
  const {section, subsection, title, abstract, url, byline,
        published_date, multimedia} = singleArticle
  return (
    <section className='details-container' data-cy="details-container">
      <h2>{title}</h2>
      <p>{byline}</p>
      <p>{abstract}</p>
      <p>Section: {section}</p>
      {subsection ? <p>Topic: {subsection}</p> : null}
      <p>Publish Date: {published_date}</p>
      <p>For more information, please <a href={url} target="_blank" rel="noopener noreferrer">click here</a>.</p>
      {multimedia ? <img src={multimedia['0'].url} alt={multimedia['0'].caption}></img> : null}
    </section>
  );
}

export default ArticleDetails;