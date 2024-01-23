import React from "react";
import Comments from "./comment";
import "./commentsList.css";

const CommentlList = (props) => {
  console.log(props.yorumlar);
  return (
    <div className="comments-list">
      {props.yorumlar.map((item, index) => (
        <Comments key={index} item={item} />
      ))}
    </div>
  );
};

export default CommentlList;
