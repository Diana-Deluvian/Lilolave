import React from 'react';

import './NewPostKeyword.css';

const NewPostKeyword = ({keyword, index, handleChangeKeyword, deleteKeyword}) => {
    return(
        <div>
        <input data-index={index} onChange={handleChangeKeyword} value={keyword}></input>
        <button data-index={index}  onClick={deleteKeyword}>Delete keyword</button>
        </div>
    )
}

export default NewPostKeyword;