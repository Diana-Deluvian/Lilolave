import React from 'react';

import './NewPostCategories.css';

const NewPostCategories = ({handleChange}) => {
    return(
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
    )
}

export default NewPostCategories;