import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to ="/">Home</Link> | <Link to ="/about">About</Link>
      </nav>

      <hr />

      <Routes>
        <Route path ="/" element ={<h1>Home Page</h1>} />
        <Route path ="/about" element ={<h1>About Page</h1>} />
      </Routes>

      <hr />

      <footer>&copy; GitHub User Search</footer>
    </BrowserRouter>
  );
}

export default App;