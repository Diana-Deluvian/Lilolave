import React, { useState } from 'react';
import ThumbPost from './Posts/ThumbPost'

import './MainContent.css'

const MainContent = (props) => {
    const posts = props.posts.filter(props.FILTER_MAP[props.filter]).map(post => <ThumbPost name={post.name} category={post.category}
        content={post.content} date={post.date} id={post.id} /> )
    return (
        <div className='mainContentContainer'>
            {posts}
        </div>
    )
}

export default MainContent;