import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


import './ThumbPost.css';

function ellipsify (str) {
    if (str.length > 100) {
        return (str.substring(0, 100) + "...Read more.");
    }
    else {
        return str;
    }
}

const ThumbPost = ({ category, name, content, date, id }) => {
    let history = useHistory();
    return(

        <div className="Post" onClick={() => history.push(`/post/${id}`) }>
            
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

export default ThumbPost;