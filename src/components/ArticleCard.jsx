import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <li className="ArticleCard">
      <Link to={`/articles/${article.article_id}`}>
        <img src={article.article_img_url} width="100px" alt={article.title} />
        <h3>{article.title}</h3>
        <h3>{article.author}</h3>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
      </Link>
    </li>
  );
};

export default ArticleCard;