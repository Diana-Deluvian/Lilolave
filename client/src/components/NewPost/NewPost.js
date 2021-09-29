import React, { useState } from 'react';
import './NewPost.css';
import { useHistory } from "react-router-dom";
import NewPostTextArea from './NewPostTextArea/NewPostTextArea'

const NewPost = () => {
    const [post, setPost] = useState({});
    const [textAreas, setTextAreas] = useState([]);
    const handleChange = e => {
        const { name, value } = e.target;
        setPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleChangeContent = e => {
        const { name, value } = e.target;
        setPost(prevState => ({
            ...prevState,
            content: {...prevState.content,
                [name]:value
            }
        }))
    }
    const appendThing = e => {
        e.preventDefault();
        let text = <NewPostTextArea />
        
        setTextAreas(text);
    }
    let history = useHistory();
    return (

        

    <form className="NewPostForm"> 

<fieldset onChange={handleChange} className="NewPostCategories">
      <legend>Category</legend>
      <input type="radio" name="category" value="Essays"
          id="Essays"/>
      <label for="Essays">Essays</label>
      <input type="radio" name="category" value="Reviews"
          id="Reviews"/>
      <label for="Reviews">Reviews</label>
      <input type="radio" name="category" value="Poems"
          id="Poems"/>
     <label for="Poems">Poems</label>
     <input type="radio" name="category" value="Film Critique"
          id="Film Critique"/>
      <label for="Film Critique">Film Critique</label>
      <input type="radio" name="category" value="Game Analysis"
          id="Game Analysis"/>
      <label for="Game Analysis">Game Analysis</label>
      <input type="radio" name="category" value="Series Introspection"
          id="Series Introspection"/>
     <label for="Series Introspection">Series Introspection</label>
  </fieldset>
        <h1>Hello</h1>
        <textarea name="content1" onChange={handleChangeContent}></textarea>
        <textarea name="content2" onChange={handleChangeContent}></textarea>
        {textAreas}
        <button onClick={appendThing}></button>
    <button type="submit">Submit</button>
      </form>
    )
}

export default NewPost;