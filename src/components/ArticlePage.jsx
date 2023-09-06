import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleHeader from './ArticleHeader';
import { getArticlePage } from '../utils/api';

const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticlePage(article_id)
      .then((data) => {
        setArticle(data.article);
      });
  }, [article_id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ArticlePage">
      <ArticleHeader />
      <img className="APImage"src={article.article_img_url} width="100px" alt={article.title} />
        <h3 className="APTitle">{article.title}</h3>
        {/* <h4 className="APAuthor">{article.author}</h4> */}
        <p className="APVotes">Votes: {article.votes}</p>
        <p className="APComments">Comments: {article.comment_count}</p>
    </div>
  );
};

export default ArticlePage;