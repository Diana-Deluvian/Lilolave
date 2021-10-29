
import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch,  Link,
  useRouteMatch,
  useParams, useHistory } from 'react-router-dom'

import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Post from './components/Post/Post';
import NewPost from './components/NewPost/NewPost';
import Footer from './components/Footer/Footer';

const FILTER_MAP = {
  "All": () => true,
  "Essays": post => post.category === 'Essays',
  "Poems": post => post.category === 'Poems',
  "Reviews": post => post.category === 'Reviews',
  "Film critique": post => post.category === 'Film critique',
  "Game analysis": post => post.category === 'Game analysis',
  "Series introspection": post => post.category === 'Series introspection'
};

const FILTER_NAMES = Object.keys(FILTER_MAP);


function App() {
  const [filter, setFilter] = useState('All');
  const [postsState, setPostsState] = useState({
    loading: false, posts: []});
  const [newPost, setPost] = useState({});
  let history = useHistory();

  useEffect(() => {
    setPostsState({ loading: true });
    fetch('http://localhost:8080/getPosts')
    .then(response => response.json())
    .then(data => setPostsState({loading: false, posts: data}))
  },[setPostsState]);

  const handleNewPost = (newPost) => {
    fetch('http://localhost:8080/postPost', {
      method: 'POST',
      headers: {'Content-Type':'application/json',
      "Access-Control-Allow-Origin": '*'},
      body: JSON.stringify(newPost),
    }).then(response => response.json())
    .then(data => {setPostsState({ posts:[...postsState.posts, data] })
    history.push(`/post/${data._id}`)
   // history.push(`/`)
  });
  }

  const deletePost = _id => {
    fetch('http://localhost:8080/deletePost/' + _id, {
  method: 'DELETE',
})
.then(res => res.text()) // or res.json()

  const newPosts = postsState.posts.filter((post) => post._id !== _id);
  console.log(newPosts);
  setPostsState({loading: false, posts: newPosts});
  history.push('/'); 
  }

  if(postsState.loading) return <h1>1 sec pls</h1>
  return (
    <div className='container'>
      
      <Header setFilter={setFilter} />

      <Switch>
        <Route path={`/post/:postId`}>
          <Post posts = {postsState.posts} deletePost={deletePost}  />
        </Route>
        <Route path={`/new-post`}>
            <NewPost handleNewPost={handleNewPost}/>
        </Route>
        <Route path={`/`}>
           <MainContent posts = {postsState.posts} filter={filter} FILTER_MAP={FILTER_MAP}/>
        </Route>
        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
