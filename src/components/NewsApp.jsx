import { useEffect, useRef, useState } from "react";
import Article from "./Article";
import "./Article.css";
const NewsApp = () => {
  const observer = useRef();
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const getNewsData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?page=${page}&pageSize=5&country=in&apiKey=04a952749fae4664b1d0611cf5a4a36f`
    );
    const data = await response.json();
    setArticles((prevData) => [...prevData, ...data.articles]);
  };

  const onIntersect = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  useEffect(() => {
    console.log("observer atached");
    if (!observer.current) return;
    const io = new IntersectionObserver(onIntersect, {
      threshold: 1,
    });
    // console.log(observer.current);
    io.observe(observer.current);
    return () => {
      io && io.disconnect();
    };
  }, [observer]);
  useEffect(() => {
    if (page !== 0) {
      console.log("Use effect called with count", page);
      getNewsData();
    }
  }, [page]);
  return (
    <div>
      <h1 className="main-heading">Sai Surya Teja News</h1>
      <div className="article-container">
        {articles.map((item, index) => {
          return <Article item={item} key={index} />;
        })}
      </div>

      <div ref={observer}>Ending line</div>
    </div>
  );
};

export default NewsApp;
