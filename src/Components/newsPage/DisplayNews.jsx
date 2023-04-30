import React, { useContext } from "react";
import classes from "./DisplayNews.module.css";
import Button from "../UI/Button";
import { UserStatusContext } from "../../store/UserStatusProvider";

function DisplayNews(props) {
  const sortedNews = [...props.news].sort((a, b) => {
    return b.date - a.date;
  });

  const ctx = useContext(UserStatusContext);

  const importantClass = classes["news-item-header"] + " " + classes.important;
  const notImportantClass =
    classes["news-item-header"] + " " + classes["not-important"];

  return (
    <div className={classes["news-container"]}>
      {sortedNews.map((news) => (
        <div key={news.id} className={classes["news-item"]}>
          {news.important ? (
            <div className={importantClass}>
              <h2>{news.title}</h2>
              <p>VAŽNO!</p>
              <p>{news.date}</p>
            </div>
          ) : (
            <div className={notImportantClass}>
              <h2>{news.title}</h2>
              <p>{news.date}</p>
            </div>
          )}
          <p className={classes.description}>{news.text}</p>
          <div className={classes["delete-button"]}>
            {ctx.userStatus === "admin" && (
              <Button
                label="Obriši"
                onClick={() => props.deleteNews(news.id)}
                type="red"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayNews;
