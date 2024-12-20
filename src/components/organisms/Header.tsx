
import { Link } from 'react-router-dom';

function Header() {
  
    
    return (
        <header className="bg-gradient-to-r from-gray-200 to-white shadow-lg">
          <div className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-black">High Jeans</h1>
            <nav className="space-x-8">
              <Link to="/" className="text-black hover:text-gray-700">Home</Link>
              <Link to="/pricelist" className="text-black hover:text-gray-700">Pricelist</Link>
              <Link to="/contact" className="text-black hover:text-gray-700">Contact</Link>
              <Link to="/about" className="text-black hover:text-gray-700">About</Link>
              <Link to="/customer-service" className="text-black hover:text-gray-700">Customer Service</Link>
            </nav>
          </div>
        </header>
      );
    }

export default Header