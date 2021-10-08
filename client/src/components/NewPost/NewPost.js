import React, { useState } from 'react';
import './NewPost.css';
import { useHistory } from "react-router-dom";
import NewPostCategories from './NewPostCategories/NewPostCategories';
import NewPostContent from './NewPostContent/NewPostContent';
import NewPostKeyword from './NewPostKeyword/NewPostKeyword';
import NewPostReference from './NewPostReference/NewPostReference';
import NewPostAdditionalInfo from './NewPostAdditionalInfo/NewPostAdditionalInfo';
import NewPostPersonalNote from './NewPostPersonalNote/NewPostPersonalNote';

const NewPost = (props) => {
    const [post, setPost] = useState({});
    const [title, setTitle] = useState(props.title || "");
    const [contents, setContents] = useState(props.contents || ["test"]);
    const [keywords, setKeywords] = useState(props.keywords || ['', '', '']);
    const [references, setReferences] = useState(props.references || [""]);
    const [additionalInfos, setAdditionalInfos] = useState(props.additionalInfos || [""]);
    const [personalNotes, setPersonalNotes] = useState(props.personalNotes || [""]);

    let history = useHistory();

    const handleChange = e => {
        const { name, value } = e.target;
        setPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleTitleChange = e => {
      const newTitle = e.target.value;
      setTitle(newTitle);
  };

    function addContent(e) {
      e.preventDefault();
      const newContent = "";
      setContents([...contents, newContent]);
    }
    const handleChangeContent = e => {
        let newContent = e.target.value;
        let newContents =  [...contents]
        newContents[e.target.dataset.index] = newContent;
        setContents([...newContents]);
    }

    const deleteContent = e => {
      e.preventDefault();
      let newContents =  contents;
      newContents.splice(e.target.dataset.index, 1);
      setContents([...newContents])
    }

    const contentsList = contents
    .map((content, index) => (
      <NewPostContent 
        index = {index}
        content = {content}
        handleChangeContent = {handleChangeContent}
        deleteContent = {deleteContent}
      />
    ));

    function addKeyword(e) {
      e.preventDefault();
      const newKeyword = "";
      setKeywords([...keywords, newKeyword]);
    }

    const handleChangeKeyword = e => {
      let newKeyword = e.target.value;
      let newKeywords =  [...keywords]
      newKeywords[e.target.dataset.index] = newKeyword;
      setKeywords([...newKeywords]);
  }

  const deleteKeyword = e => {
    e.preventDefault();
    let newKeywords = [...keywords];
    newKeywords.splice(e.target.dataset.index, 1);
    setKeywords([...newKeywords])
  }
    const keywordsList = keywords
    .map((keyword, index) => (
      <NewPostKeyword
        index = {index}
        keyword = {keyword}
        handleChangeKeyword = {handleChangeKeyword}
        deleteKeyword = {deleteKeyword}
      />
    ));

    function addReference(e) {
      e.preventDefault();
      const newReference = "";
      setReferences([...references, newReference]);
    }

    const handleChangeReference = e => {
      let newReference = e.target.value;
      let newReferences =  [...references]
      newReferences[e.target.dataset.index] = newReference;
      setReferences([...newReferences]);
  }

  const deleteReference = e => {
    e.preventDefault();
    let newReferences = [...references];
    newReferences.splice(e.target.dataset.index, 1);
    setReferences([...newReferences])
  }
    const referencesList = references
    .map((reference, index) => (
      <NewPostReference
        index = {index}
        reference = {reference}
        handleChangeReference = {handleChangeReference}
        deleteReference = {deleteReference}
      />
    ));

    function addAdditionalInfo(e) {
      e.preventDefault();
      const newAdditionalInfo = "";
      setAdditionalInfos([...additionalInfos, newAdditionalInfo]);
    }

    const handleChangeAdditionalInfo = e => {
      let newAdditionalInfo = e.target.value;
      let newAdditionalInfos =  [...additionalInfos]
      newAdditionalInfos[e.target.dataset.index] = newAdditionalInfo;
      setAdditionalInfos([...newAdditionalInfos]);
  }

  const deleteAdditionalInfo = e => {
    e.preventDefault();
    let newAdditionalInfos = [...additionalInfos];
    newAdditionalInfos.splice(e.target.dataset.index, 1);
    setAdditionalInfos([...newAdditionalInfos])
  }
    const additionalInfosList = additionalInfos
    .map((additionalInfo, index) => (
      <NewPostAdditionalInfo
        index = {index}
        additionalInfo = {additionalInfo}
        handleChangeAdditionalInfo = {handleChangeAdditionalInfo}
        deleteAdditionalInfo = {deleteAdditionalInfo}
      />
    ));

    function addPersonalNote(e) {
      e.preventDefault();
      const newPersonalNote = "";
      setPersonalNotes([...personalNotes, newPersonalNote]);
    }

    const handleChangePersonalNote = e => {
      let newPersonalNote = e.target.value;
      let newPersonalNotes =  [...personalNotes]
      newPersonalNotes[e.target.dataset.index] = newPersonalNote;
      setPersonalNotes([...newPersonalNotes]);
  }

  const deletePersonalNote = e => {
    e.preventDefault();
    let newPersonalNotes = [...personalNotes];
    newPersonalNotes.splice(e.target.dataset.index, 1);
    setPersonalNotes([...newPersonalNotes])
  }
    const personalNotesList = personalNotes
    .map((personalNote, index) => (
      <NewPostPersonalNote
        index = {index}
        personalNote = {personalNote}
        handleChangePersonalNote = {handleChangePersonalNote}
        deletePersonalNote = {deletePersonalNote}
      />
    ));


    const handlePostSubmit = (e) => {
      e.preventDefault();
      let newPost = {title, contents, keywords, references, additionalInfos, personalNotes};
      fetch('https://pifc.herokuapp.com/')
        .then(response => response.json())
        .then(data => newPost.date = data.fullDate)
        .then(props.handleNewPost(newPost));         
    }
    
    return (

        

    <form className="NewPostForm" onSubmit={handlePostSubmit}> 
        <h2>Title: </h2>
        <input className="NewPostTitle" onChange={handleTitleChange}></input>
        <NewPostCategories handleChange={handleChange} />
        <h4>Personal Notes:</h4>
        {personalNotesList}
        <button onClick={addPersonalNote}>Add a personal note</button>
        <p>Content: </p>
        {contentsList}
        <button onClick={addContent}>Add more content</button>
        <p>Keywords: </p>
        {keywordsList}
        <button onClick={addKeyword}>Add more keywords</button>
        {referencesList}
        <button onClick={addReference}>Add more references</button>
        {additionalInfosList}
        <button onClick={addAdditionalInfo}>Add more info</button>

    <button type="submit">Submit</button>
      </form>
    )
}

export default NewPost;