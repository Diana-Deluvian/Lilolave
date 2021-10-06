import React, { useState } from 'react';
import './NewPostContent.css'

const NewPostContent = ( {handleChangeContent, content, index, deleteContent }) => {
    
    return (
        <div>
        <textarea data-index={index} onChange={handleChangeContent} value={content}></textarea>
        <button data-index={index} onClick={deleteContent}>Delete post</button>
        </div>
    )
}

export default NewPostContent;