import React from 'react';

const CommentCard = ({ comment }) => {
  return (
    <li className="CommentCard">
        <p className="CommentAuthor">{comment.author}</p>
        <p className="CommentBody">{comment.body}</p>
        <p className="CommentVotes">Votes: {comment.votes}</p>
    </li>
  );
};

export default CommentCard;