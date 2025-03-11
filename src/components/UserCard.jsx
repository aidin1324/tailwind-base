import { Link } from 'react-router-dom';

function UserCard({ user }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:scale-105 hover:shadow-lg">
      <div className="flex items-center gap-4">
        <img 
          src={`https://i.pravatar.cc/150?img=${user.id}`} 
          alt={`${user.name.firstname} ${user.name.lastname}`}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {user.name.firstname} {user.name.lastname}
          </h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-500">
            {user.address.city}, {user.address.street}
          </p>
        </div>
      </div>
      
      <div className="mt-6">
        <Link 
          to={`/users/${user.id}`}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors inline-block"
        >
          More Details
        </Link>
      </div>
    </div>
  );
}

export default UserCard;