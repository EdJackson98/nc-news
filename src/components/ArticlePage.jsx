import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleHeader from './ArticleHeader';
import { getArticlePage } from '../utils/api';
import CommentsList from "./CommentsList.jsx"

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
    <>
    <div className="ArticleHeader">
      <ArticleHeader />
    </div>
    <div className="ArticlePage">
        <img className="APImage" src={article.article_img_url} width="100px" alt={article.title} />
        <h3 className="APTitle">{article.title}</h3>
        <p className="APVotes">Votes: {article.votes}</p>
        <p className="APComments">Comments: {article.comment_count}</p>
        <button className="UpvoteButton">Upvote!</button>
        <p className="ArticleBody">{article.body}</p>
      </div>
    <CommentsList article_id={article_id}/>
  </>
  );
};

export default ArticlePage;