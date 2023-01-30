import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Services from './pages/Services';
import BookService from './pages/BookService';
import Payment from './pages/Payment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/bookService' element={<BookService />}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
