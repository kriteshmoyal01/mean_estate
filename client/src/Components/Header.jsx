import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <header className="bg-gray-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-3">
        <Link to='/Home'>
          <h1 className="hidden sm:block font-bold text-base sm:text-xl flex flex-wrap text-gray-600 hover:underline">
            <span className="text-gray-500">Devi</span>
            <span className="text-gray-900">Agro</span>
          </h1>
        </Link>
        
        <form className="bg-gray-100 p-2 rounded-lg flex items-center">
          <label htmlFor="search" className="sr-only">Search</label>
          <input
            type="text"
            id="search"
            placeholder="Search..."
            className="bg-transparent border-none focus:outline-none w-28 sm:w-64"
          />
          <FaSearch className="text-gray-600" />
        </form>
        
        <ul className="flex space-x-4">
          <Link to='/Home'>
            <li className="hidden sm:block text-gray-600 hover:underline">Home</li>
          </Link>
          
          <Link to='/About'>
            <li className="hidden sm:block text-gray-600 hover:underline">About</li>
          </Link>
          
          <Link to='/Contact'>
            <li className="hidden sm:block text-gray-600 hover:underline">Contact</li>
          </Link>

          <Link to='/SignOut'>
            <li className="hidden sm:block text-gray-600 hover:underline">Sign Out</li>
          </Link>
          
          <Link to='/SignIn'>
            <li className="hidden sm:block text-gray-600 hover:underline">Sign In</li>
          </Link>
          
          <Link to='/Profile'>
            <li className="hidden sm:block text-gray-600 hover:underline">Profile</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
