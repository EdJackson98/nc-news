import React, { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { getCommentsByArticle } from "../utils/api";

const CommentsList = ({article_id}) => {
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    getCommentsByArticle(article_id).then(({ comments }) => {
        setCommentData(comments);
    });
  }, [article_id]);

  return (
    <div className="CommentsList">
      <ul>
        {commentData.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </div>
  );
};

export default CommentsList;

//   return (
//     <div className="ArticlesList">
//     <Header1/>
//       <ul>
//         {articleData.map((article) => {
//           return <ArticleCard key={article.article_id} article={article} />;
//         })}
//       </ul>
//     </div>
//   );
// };
