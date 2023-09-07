import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleHeader from './ArticleHeader';
import { getArticlePage, patchArticleVote } from '../utils/api';
import CommentsList from "./CommentsList.jsx"

const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [voteCount, setVoteCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getArticlePage(article_id)
      .then((data) => {
        setArticle(data.article);
        setVoteCount(data.article.votes);
      });
  }, [article_id]);

  const handleUpvote = () => {
    if (isLoading) {
      return;
    }
    setVoteCount(voteCount + 1);
    setIsLoading(true);
    patchArticleVote(article_id, 1)
      .then(() => {
        setIsLoading(false);
      })
  };

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
        <p className="APVotes">Votes: {voteCount}</p>
        <p className="APComments">Comments: {article.comment_count}</p>
        <button className="UpvoteButton" onClick={handleUpvote}>Upvote!</button>
        <p className="ArticleBody">{article.body}</p>
      </div>
    <CommentsList article_id={article_id}/>
  </>
  );
};

export default ArticlePage;