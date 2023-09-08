import React, { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import CommentBox from "./CommentBox"
import { getCommentsByArticle } from "../utils/api";

const CommentsList = ({ article_id }) => {
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticle(article_id)
      .then((response) => {
        if (response.msg) {
          setCommentData([]);
        } else {
          setCommentData(response.comments);
        }
        setIsLoading(false);
      })
  }, [article_id]);

  const handleCommentSubmit = (newComment) => {
    setCommentData((prevComments) => [newComment, ...prevComments]);
  };

  return (
    <div className="CommentsList">
    <CommentBox article_id={article_id} onCommentSubmit={handleCommentSubmit}/>
      {isLoading && (
        <p>Loading comments...</p>
      )}
  
      {!isLoading && commentData.length === 0 && (
        <p style={{ color: 'red' }}>No comments found for this article.</p>
      )}
  
      {!isLoading && commentData.length > 0 && (
        <ul>
          {commentData.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentsList;
