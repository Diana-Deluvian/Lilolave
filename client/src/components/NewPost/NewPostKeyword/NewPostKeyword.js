import React, {useState} from 'react';

import './NewPostKeyword.css';

const NewPostKeyword = ({keyword,id, gabagool, handleChangeKeyword, deleteKeyword}) => {
    return(
        <div>
        <input id={id} onChange={handleChangeKeyword} value={keyword}></input>
        <button name={id} gabagool={gabagool} onClick={deleteKeyword}>Delete keyword</button>
        </div>
    )
}

export default NewPostKeyword;