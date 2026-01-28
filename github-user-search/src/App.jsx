import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Search from './components/Search';
import About from './components/About';
import Results from './components/Results';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="navbar">
          <div className="nav-content">
            <Link to="/" className="logo">GitUS</Link>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/results" element={<Results />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} GitHub User Search</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;