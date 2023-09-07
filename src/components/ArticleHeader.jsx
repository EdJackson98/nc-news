import React from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../contexts/user-context';

const ArticleHeader = () => {
  const {user, setUser} = useContext(UserContext)
  return (
    <div className="ArticleHeader">
      <Link to="/"><button className="AHHomeButton">Home</button></Link>
      <p>Logged in as: {user}</p>
    </div>
  );
};

export default ArticleHeader;