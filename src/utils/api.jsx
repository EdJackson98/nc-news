import axios from "axios";

const baseURL = "https://ej-nc-news.onrender.com";
const api = axios.create({ baseURL });

export const getArticlesList = () => {
    let string = "/api/articles"
    return api.get(`${string}`).then((result) => {
        return result.data;
      });
}

export const getArticlePage = (article_id) => {
    let string = `/api/articles/${article_id}`;
    return api.get(`${string}`).then((result) => {
      return result.data;
    });
  };