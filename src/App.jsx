import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Footer from './components/footer/Footer';
import Error from "./components/error/Error"

function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
          <Route path='*' element={<Error/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/> 
          <Route path='/home' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
