import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserById } from '../store/async/usersAsync';

function UserDetail() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { currentUser, loading, error } = useSelector(state => state.users);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    dispatch(fetchUserById(userId));
  }, [dispatch, userId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error || !currentUser) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <p>Error: {error || 'User not found'}</p>
        <Link to="/users" className="mt-4 inline-block text-blue-600 hover:underline">
          Back to users list
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <img 
          src={`https://i.pravatar.cc/150?img=${currentUser.id}`} 
          alt={`${currentUser.name.firstname} ${currentUser.name.lastname}`}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {currentUser.name.firstname} {currentUser.name.lastname}
          </h1>
          <p className="text-gray-600 mb-4">{currentUser.email}</p>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Address</h2>
              <p>{currentUser.address.street}, {currentUser.address.number}</p>
              <p>{currentUser.address.city}, {currentUser.address.zipcode}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold">Contact</h2>
              <p>Phone: {currentUser.phone}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold">Geolocation</h2>
              <p>Latitude: {currentUser.address.geolocation.lat}</p>
              <p>Longitude: {currentUser.address.geolocation.long}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold">Login Info</h2>
              <p>Username: {currentUser.username}</p>
              <div className="flex items-center">
                <p>Password: {showPassword ? currentUser.password : '••••••••'}</p>
                <button 
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 text-sm text-blue-500 hover:text-blue-700"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <Link 
          to="/users" 
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
        >
          Back to users list
        </Link>
      </div>
    </div>
  );
}

export default UserDetail;