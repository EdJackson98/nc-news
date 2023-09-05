const ArticleCard = ({ article }) => {
    return (
        <li className="ArticleCard">
            <h3>{article.title}</h3>
            <h3>{article.author}</h3>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
        </li>
    )
}

export default ArticleCard