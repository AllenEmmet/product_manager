import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import {BrowserRouter, Routes, Router, Route} from 'react-router-dom'
import Main from '../src/view/Main'
import Detail from '../src/components/Detail'
import Update from '../src/components/Update'


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path='/' default></Route>
          <Route element={<Detail/>} path='/:id'></Route>
          <Route element={<Update/>} path='/edit/:id'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
