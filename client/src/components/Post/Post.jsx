import React from 'react';
import "./Post.css";

function Post(props) {
  return (
    <div className="post">
        <p>{props.text}</p>
    </div>
  );
}

export default Post;