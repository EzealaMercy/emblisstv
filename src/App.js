
import './App.css';
import { Navbar, Feed, SearchD, Videodetail } from './component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact element = {<Feed/>}/>
        <Route path='/video/:id' element = {<Videodetail/>}/>
        <Route path='/search/:searchTerm' element = {<SearchD/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
