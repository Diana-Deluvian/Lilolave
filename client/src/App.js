
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header/Header';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import MainContent from './components/MainContent/MainContent';
import SidebarRight from './components/SidebarRight/SidebarRight';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <SidebarLeft></SidebarLeft>
        <MainContent></MainContent>
        <SidebarRight></SidebarRight>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
