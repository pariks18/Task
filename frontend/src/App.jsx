import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Admin from './pages/Admin.jsx'; 
function App() {
 return ( <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
 )
}

export default App
