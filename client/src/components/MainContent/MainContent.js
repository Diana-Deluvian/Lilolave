import React, {useState} from 'react';
import Post from './Posts/Post'

import './MainContent.css'

const MainContent = (props) => {
    console.log(props.filter);
    const posts = props.posts.filter(props.FILTER_MAP[props.filter]).map(post => <Post name={post.name} category={post.category}
        content={post.content} date={post.date} /> )
    return (
        <div className='mainContentContainer'>
            {posts}
        </div>
    )
}

export default MainContent;