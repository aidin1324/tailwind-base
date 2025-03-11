import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error || !user) {
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
          src={`https://i.pravatar.cc/150?img=${user.id}`} 
          alt={`${user.name.firstname} ${user.name.lastname}`}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {user.name.firstname} {user.name.lastname}
          </h1>
          <p className="text-gray-600 mb-4">{user.email}</p>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Address</h2>
              <p>{user.address.street}, {user.address.number}</p>
              <p>{user.address.city}, {user.address.zipcode}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold">Contact</h2>
              <p>Phone: {user.phone}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold">Geolocation</h2>
              <p>Latitude: {user.address.geolocation.lat}</p>
              <p>Longitude: {user.address.geolocation.long}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold">Login Info</h2>
              <p>Username: {user.username}</p>
              <div className="flex items-center">
                <p>Password: {showPassword ? user.password : '••••••••'}</p>
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