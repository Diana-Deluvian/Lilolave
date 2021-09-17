
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <MainContent></MainContent>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
