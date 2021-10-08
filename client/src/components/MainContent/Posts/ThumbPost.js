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

const ThumbPost = ({ category, title, contents, date, _id }) => {
    let history = useHistory();
    console.log(_id);
    return(

        <div className="Post" onClick={() => history.push(`/post/${_id}`) }>
            
            <h3 className="postName">{title} </h3>
            <hr></hr>
            <p className="postContent">{ellipsify(contents[0] || "no content")}</p>
            <div className="postBottomInfo">        
                <p className="postCategory">{category}</p>
                <p className="postDate">{date}</p>
            </div>
        </div>
    )
}

export default ThumbPost;

