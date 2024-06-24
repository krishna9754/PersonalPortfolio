import './App.css';
import NavbarTop from './components/Navbar/Navbar';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <NavbarTop />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
