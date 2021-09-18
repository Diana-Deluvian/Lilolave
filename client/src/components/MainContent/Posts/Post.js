import React from 'react';

import './Post.css';

function ellipsify (str) {
    if (str.length > 100) {
        return (str.substring(0, 100) + "...Read more.");
    }
    else {
        return str;
    }
}

const Post = ({ category, name, content, date }) => {
    return(
        <div className="Post">
            <h3 className="postName">{name} </h3>
            <hr></hr>
            <p className="postContent">{ellipsify(content)}</p>
            <div className="postBottomInfo">        
                <p className="postCategory">{category}</p>
                <p className="postDate">{date}</p>
            </div>

        </div>
    )
}

export default Post;