import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-lg p-4 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold hover:text-blue-200 transition-colors">
          RSP
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md transition-colors">
            Home
          </Link>
          <Link to="/add-recipe" className="bg-indigo-600 text-white hover:bg-indigo-800 px-4 py-2 rounded-md font-bold transition-all shadow-md">
            + Add Recipe
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;