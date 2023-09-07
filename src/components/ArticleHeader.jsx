import React from "react";
import { Link } from "react-router-dom";

const ArticleHeader = () => {
  return (
    <div className="ArticleHeader">
      <Link to="/"><button className="AHHomeButton">Home</button></Link>
    </div>
  );
};

export default ArticleHeader;