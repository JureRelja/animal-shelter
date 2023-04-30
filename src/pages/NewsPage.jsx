import React from "react";
import AddNews from "../Components/newsPage/AddNews";
import DisplayNews from "../Components/newsPage/DisplayNews";
import classes from "./NewsPage.module.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function NewsPage() {
  const [news, setNews] = useState([]);

  //Getting news on the first render
  const getNews = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://animal-shelter-c9a31-default-rtdb.europe-west1.firebasedatabase.app/news.json"
      );
      const data = response.data;

      const newNews = [];
      for (const key in response.data) {
        const news = {
          id: key,
          ...data[key],
        };
        newNews.push(news);
      }
      setNews(newNews);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getNews();
  }, [getNews]);

  //Deleting news
  const deleteNews = async (id) => {
    try {
      await axios.delete(
        `https://animal-shelter-c9a31-default-rtdb.europe-west1.firebasedatabase.app/news/${id}.json`
      );
      setNews((prevNews) => prevNews.filter((news) => news.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  //Adding news
  const addNews = async (news) => {
    try {
      const response = await axios.post(
        "https://animal-shelter-c9a31-default-rtdb.europe-west1.firebasedatabase.app/news.json",
        news
      );
      const data = response.data;
      const newNews = {
        id: data.name,
        ...news,
      };
      setNews((prevNews) => [...prevNews, newNews]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes["news-page"]}>
      <AddNews addNews={addNews} />
      <DisplayNews news={news} deleteNews={deleteNews} />
    </div>
  );
}

export default NewsPage;
