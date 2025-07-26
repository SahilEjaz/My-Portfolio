import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50 ">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold text-blue-600">
          Sahil's Portfolio
        </Link>
        <div className="space-x-6 ">
          <Link to="/projects" className="  p-4 bg-white transform transition duration-300 hover:scale-105 hover:bg-blue-50">Projects</Link>
          <Link to="/resume" className="  p-4 bg-white transform transition duration-300 hover:scale-105 hover:bg-blue-50">Document</Link>
          <Link to="/contact"className="  p-4 bg-white transform transition duration-300 hover:scale-105 hover:bg-blue-50">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
