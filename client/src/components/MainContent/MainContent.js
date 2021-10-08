import React, { useState } from 'react';
import ThumbPost from './Posts/ThumbPost'

import './MainContent.css'

const MainContent = (props) => {
    const posts = props.posts.filter(props.FILTER_MAP[props.filter]).map(post => <ThumbPost title={post.title} category={post.category}
        contents={post.contents} date={post.date} _id={post._id} /> )
    return (
        <div className='mainContentContainer'>
            {posts}
        </div>
    )
}

export default MainContent;