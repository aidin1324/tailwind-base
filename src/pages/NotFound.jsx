import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-9xl font-bold text-gray-300">404</h1>
      <p className="text-2xl font-medium text-gray-600 mt-4 mb-8">Page Not Found</p>
      <Link 
        to="/users" 
        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound;