import React from "react";
import "./styles/newsListItemStyles.css";

const NewsListItem = props => {
  return (
    <div className="parentContainer">
      <div className="mainContainer">
        <img src={props.thumbnail} alt="" width="125px" height="125px" />
        <div className="textWrapper">
          <p className="newsTitle">{props.newsTitle}</p>
          <p className="newsDescription">{props.newsDescription}</p>
          <p> {props.author}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsListItem;
