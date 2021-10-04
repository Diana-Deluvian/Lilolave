import React, { useState } from 'react';
import './NewPost.css';
import { useHistory } from "react-router-dom";
import NewPostCategories from './NewPostCategories/NewPostCategories';
import NewPostTextArea from './NewPostTextArea/NewPostTextArea'

const NewPost = (props) => {
    const [post, setPost] = useState({});
    const [textAreas, setTextAreas] = useState(props.contents || ["test"]);

    function addTextArea(e) {
        e.preventDefault();
        const newTextArea = "";
        setTextAreas([...textAreas, newTextArea]);
      }

    const handleChange = e => {
        const { name, value } = e.target;
        setPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleChangeContent = e => {
        let newTextArea = e.target.value;
        let newTextAreas =  [...textAreas]
        newTextAreas[e.target.id] = newTextArea;
        console.log(newTextAreas)
        setTextAreas([...newTextAreas]);
    }

    const textAreasList = textAreas
    .map((textArea, index) => (
      <NewPostTextArea 
        id = {index}
        content = {textArea}
        handleChangeContent = {handleChangeContent}
      />
    ));
    
    let history = useHistory();
    return (

        

    <form className="NewPostForm"> 
        <NewPostCategories handleChange={handleChange} />
        {textAreasList}
        <button onClick={addTextArea}>Add more content</button>
    <button type="submit">Submit</button>
      </form>
    )
}

export default NewPost;