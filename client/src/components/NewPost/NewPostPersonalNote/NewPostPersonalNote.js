import React from 'react';

import './NewPostPersonalNote.css';

const NewPostPersonalNote = ({personalNote, index, handleChangePersonalNote, deletePersonalNote}) => {
    return(
        <div>
        <textarea data-index={index} onChange={handleChangePersonalNote} value={personalNote}></textarea>
        <button data-index={index}  onClick={deletePersonalNote}>Delete PersonalNote</button>
        </div>
    )
}

export default NewPostPersonalNote;