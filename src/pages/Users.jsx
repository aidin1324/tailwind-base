import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllUsers } from '../store/async/usersAsync.js';
import UserCard from '../components/UserCard';

function Users() {
  const dispatch = useDispatch();
  const { usersList, loading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Users List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {usersList.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;