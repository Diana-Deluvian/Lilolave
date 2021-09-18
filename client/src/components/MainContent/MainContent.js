import React from 'react';
import Post from './Posts/Post'

import './MainContent.css'

const MainContent = (props) => {

    const posts = props.posts.map(post => <Post name={post.name} category={post.category}
        content={post.content} date={post.date} /> )
    return (
        <div className='mainContentContainer'>
            {posts}
        </div>
    )
}

export default MainContent;