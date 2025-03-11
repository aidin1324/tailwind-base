import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">UserDirectory</Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/users" className="text-gray-700 hover:text-blue-600 transition-colors">
                Users List
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;