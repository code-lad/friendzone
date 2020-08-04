import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        <strong>{username}</strong>
      </div>

      {/* Header -> Avatar -> Username */}
      <img className="post__img" src={imageUrl} alt="" />
      <div className="post__footer">
        <strong>{username}:</strong> {caption}
      </div>
    </div>
  );
}

export default Post;
