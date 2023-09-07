import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/user-context"; 
import { postComment } from "../utils/api"; 

const CommentBox = ({ article_id }) => {
    const { user } = useContext(UserContext);
    const [commentInput, setCommentInput] = useState("");

    const newComment = {
        username: user,
        body: commentInput,
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      postComment(article_id, newComment)
    }

  
    return (
      <div className="CommentForm">
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Write your comment here..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            required
          />
          <button type="submit">
          </button>
        </form>
      </div>
    );
  };
  
export default CommentBox;