import React, { useState } from 'react';
import './NewPost.css';
import { useHistory } from "react-router-dom";
import NewPostCategories from './NewPostCategories/NewPostCategories';
import NewPostTextArea from './NewPostTextArea/NewPostTextArea';
import NewPostKeyword from './NewPostKeyword/NewPostKeyword';

const NewPost = (props) => {
    const [post, setPost] = useState({});
    const [textAreas, setTextAreas] = useState(props.contents || ["test"]);
    const [keywords, setKeywords] = useState(props.keywords || ['', '', ''])



    const handleChange = e => {
        const { name, value } = e.target;
        setPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    function addTextArea(e) {
      e.preventDefault();
      const newTextArea = "";
      setTextAreas([...textAreas, newTextArea]);
    }
    const handleChangeContent = e => {
        let newTextArea = e.target.value;
        let newTextAreas =  [...textAreas]
        newTextAreas[e.target.id] = newTextArea;
        setTextAreas([...newTextAreas]);
    }

    const deleteContent = e => {
      e.preventDefault();
      let newTextAreas =  textAreas;
      newTextAreas.splice(e.target.name, 1);
      setTextAreas([...newTextAreas])
    }

    const textAreasList = textAreas
    .map((textArea, index) => (
      <NewPostTextArea 
        id = {index}
        content = {textArea}
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
      newKeywords[e.target.id] = newKeyword;
      setKeywords([...newKeywords]);
  }

  const deleteKeyword = e => {
    e.preventDefault();
    let newKeywords =  keywords;
    newKeywords.splice(e.target.name, 1);
    setKeywords([...newKeywords])
  }
    const keywordsList = keywords
    .map((keyword, index) => (
      <NewPostKeyword
        id = {index}
        keyword = {keyword}
        handleChangeKeyword = {handleChangeKeyword}
        deleteKeyword = {deleteKeyword}
        gabagool={"gabagool"}
      />
    ));


    
    let history = useHistory();
    return (

        

    <form className="NewPostForm"> 
        <NewPostCategories handleChange={handleChange} />
        <p>Content: </p>
        {textAreasList}
        <button onClick={addTextArea}>Add more content</button>
        <p>Keywords: </p>
        {keywordsList}
        <button onClick={addKeyword}>Add more content</button>
    <button type="submit">Submit</button>
      </form>
    )
}

export default NewPost;