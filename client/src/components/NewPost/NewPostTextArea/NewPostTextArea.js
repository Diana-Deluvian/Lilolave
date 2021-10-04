import React, { useState } from 'react';

const NewPostTextArea = ( {handleChangeContent, content, id }) => {
    
    return (
        <textarea id={id} onChange={handleChangeContent} value={content}></textarea>
    )
}

export default NewPostTextArea;