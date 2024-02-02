import React from "react";
import classes from "./RecentNewsItem.module.css";
const RecentNewsItem = (props) => {
  return (
    <div className={classes["news-item"]}>
      <div className={classes["news-item_img"]}>
        <img src={props.img} alt="" />
      </div>
      <p className={classes["news-item_author"]}>{props.author}</p>
      <div className={classes["news-item_content"]}>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default RecentNewsItem;
