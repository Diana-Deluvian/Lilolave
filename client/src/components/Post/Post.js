import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams
  } from 'react-router-dom'

import './Post.css';

const Post = ( { posts, match } ) => {
    let { postId }  = useParams();
    let post = posts.find(post => post.id === postId)
    return(
      <div className="postContainer">
          <h1>{post.name}</h1>
          <p>{post.content}</p>
      </div>
    )
}

export default Post;