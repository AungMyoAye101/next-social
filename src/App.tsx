import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';

const App = () => {
  return (
    <BrowserRouter>
      <Link to={'/'}>Home</Link>
      <Link to={'/login'}>Login</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App