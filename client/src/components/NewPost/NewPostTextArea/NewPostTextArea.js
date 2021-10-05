import React, { useState } from 'react';

const NewPostTextArea = ( {handleChangeContent, content, id, deleteContent }) => {
    
    return (
        <div>
        <textarea id={id} onChange={handleChangeContent} value={content}></textarea>
        <button name={id} onClick={deleteContent}>Delete post</button>
        </div>
    )
}

export default NewPostTextArea;