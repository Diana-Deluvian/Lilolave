import React from 'react';

import './NewPostAdditionalInfo.css';

const NewPostAdditionalInfo = ({additionalInfo, index, handleChangeAdditionalInfo, deleteAdditionalInfo}) => {
    return(
        <div>
        <input data-index={index} onChange={handleChangeAdditionalInfo} value={additionalInfo}></input>
        <button data-index={index}  onClick={deleteAdditionalInfo}>Delete additionalInfo</button>
        </div>
    )
}

export default NewPostAdditionalInfo;