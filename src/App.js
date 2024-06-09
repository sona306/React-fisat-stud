import logo from './logo.svg';
import './App.css';
import AddStud from './components/AddStud';
import Search from './components/Search';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddStud/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
