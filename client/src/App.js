
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer'

const DATA = [{
  name: "Test post",
  category: "poems",
  content: "This is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid baka",
  date: "April, ninth, 2020"
},
{
  name: "Test post",
  category: "poems",
  content: "This is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid baka",
  date: "April, ninth, 2020"
},
{
  name: "Test post",
  category: "poems",
  content: "This is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid baka",
  date: "April, ninth, 2020"
},
{
  name: "Test post",
  category: "essays",
  content: "This is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid bakaThis is just a test post you stupid baka",
  date: "April, ninth, 2020"
}]

function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <MainContent posts = {DATA} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
