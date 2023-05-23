import "./Article.css";
const Article = ({ item }) => {
  const {
    title,
    author,
    content,
    description,
    publishedAt,
    url,
    urlToImage,
    source,
  } = item;
  const sourceName = source?.name;

  const date = new Date(publishedAt);
  return (
    <div className="article-card">
      <h1>{title}</h1>
      <div>{description}</div>
      <h4>Source :{sourceName}</h4>
      <h4>
        Author:{author || "Sai Surya Teja"}
        <div>
          published at :
          {` ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
        </div>
      </h4>
      <img src={urlToImage} alt="news img" className="article-img" />
      <div className="content">{content}</div>
      <a href={url} target="blank">
        {url}
      </a>
    </div>
  );
};

export default Article;
