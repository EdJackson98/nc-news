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
      .then((result)=>{
        console.log(result)
      });
    }

  
    return (
      <div className="CommentBox">
        <p className="CommentAuthor">{user}</p>
        <form onSubmit={handleSubmit}>
          <textarea
            className="CommentInput"
            placeholder="Write your comment here..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            required
          />
          <button 
          className="CommentSubmit"
          type="submit">
            Submit Comment!
          </button>
        </form>
      </div>
    );
  };
  
export default CommentBox;