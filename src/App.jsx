import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header1 from './components/Header';
import ArticlesList from './components/ArticlesList';
import ArticlePage from './components/ArticlePage';
import './app.css';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<ArticlePage/>} />
      </Routes>
    </div>
  );
}

export default App;

/*
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/article/:article_id" element={<ArticlePage />} />
        </Routes>
*/