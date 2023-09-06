import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { getArticlesList } from "../utils/api";
import Header1 from "./Header";

const ArticlesList = () => {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    getArticlesList().then(({ articles }) => {
      setArticleData(articles);
    });
  }, []);

  return (
    <div className="ArticlesList">
    <Header1/>
      <ul>
        {articleData.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </div>
  );
};

export default ArticlesList;
