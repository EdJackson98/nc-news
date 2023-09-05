import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import getArticlesList from "../utils/api";

const ArticlesList = () => {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    getArticlesList().then(({ articles }) => {
      setArticleData(articles);
    });
  }, []);

  return (
    <div className="ArticlesList">
      <ul>
        {articleData.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </div>
  );
};

export default ArticlesList;
