import React, { useState } from "react";
import "./comment.css";
const Comments = (props) => {
  const [showTitle, setShowTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const icons = (element) => {
    if (element) {
      return <i className="fas fa-caret-down" style={{ color: "#ff6600" }}></i>;
    } else {
      return <i className="fas fa-caret-up" style={{ color: "#ff6600" }}></i>;
    }
  };

  return (
    <div className="comment">
      <h3 onClick={() => setShowTitle(!showTitle)}>
        {props.item.title} <span>{icons(showTitle)}</span>
      </h3>
      {showTitle && (
        <div>
          <p onClick={() => setShowContent(!showContent)}>
            {props.item.content}{" "}
            {props.item.comment_to_comment && <span>{icons(showContent)}</span>}
          </p>
          {showContent && props.item.comment_to_comment && (
            <div className="reply">
              <p>{props.item.comment_to_comment}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Comments;
