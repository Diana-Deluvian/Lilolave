import React from 'react';

import './NewPostReference.css';

const NewPostReference = ({reference, index, handleChangeReference, deleteReference}) => {
    return(
        <div>
        <input data-index={index} onChange={handleChangeReference} value={reference}></input>
        <button data-index={index}  onClick={deleteReference}>Delete Reference</button>
        </div>
    )
}

export default NewPostReference;