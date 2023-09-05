import axios from "axios";

const baseURL = "https://ej-nc-news.onrender.com";
const api = axios.create({ baseURL });

const getArticlesList = () => {
    let string = "/api/articles"
    return api.get(`${string}`).then((result) => {
        return result.data;
      });
}

export default getArticlesList