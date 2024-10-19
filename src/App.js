import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Read from './Pages/Read/Read';
import Remove from './Pages/Remove/Remove';
import Update from './Pages/Update/Update';
import Create from './Pages/Create/Create';
import Header from './components/Header/Header';


function App() {
  return (
    <BrowserRouter>

      <Header/>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/remove' element={<Remove/>}/>
        <Route path='/update' element={<Update/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
