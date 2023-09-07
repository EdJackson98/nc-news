import axios from "axios";

const baseURL = "https://ej-nc-news.onrender.com";
const api = axios.create({ baseURL });

export const getArticlesList = () => {
  const string = "/api/articles";
  return api.get(`${string}`).then((result) => {
    return result.data;
  });
};

export const getArticlePage = (article_id) => {
  const string = `/api/articles/${article_id}`;
  return api.get(`${string}`).then((result) => {
    return result.data;
  });
};

export const getCommentsByArticle = (article_id) => {
  const string = `/api/articles/${article_id}/comments`;
  return api.get(`${string}`).then((result) => {
    return result.data;
  });
};

export const patchArticleVote = (article_id, inc_votes) => {
  const endpoint = `/api/articles/${article_id}`;
  return api.patch(endpoint, { inc_votes });
};
