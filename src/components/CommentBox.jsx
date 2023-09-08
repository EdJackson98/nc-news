import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/user-context"; 
import { postComment } from "../utils/api"; 

const CommentBox = ({ article_id, onCommentSubmit }) => {
    const { user } = useContext(UserContext);
    const [commentInput, setCommentInput] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const newComment = {
        username: user,
        body: commentInput,
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      postComment(article_id, newComment)
      .then((result)=>{
        console.log(result)
        if (result.data.comment) {
            setCommentInput("");
            onCommentSubmit(result.data.comment);
            setSuccessMessage("Comment successfully posted!");
          } else {
            setErrorMessage("Failed to post comment.");
          }
      })
      .then(() => {
        setIsSubmitting(false);
      })
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
          type="submit"
          disabled={isSubmitting}>
            Submit Comment!
          </button>
            {successMessage && <p className="SuccessMessage">{successMessage}</p>}
            {errorMessage && <p className="ErrorMessage">{errorMessage}</p>}
        </form>
      </div>
    );
  };
  
export default CommentBox;