import { useState, useEffect, useContext } from "react";
import { FavoriteUserContext } from "./FavoriteUserContext";
import { Loader } from "lucide-react";

const UserPicker = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setFavoriteUser } = useContext(FavoriteUserContext);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("failed to get the user", error);
        setUsers(null);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  const handleUserClick = (user) => {
    setFavoriteUser({
      name: user.name,
      email: user.email,
    });
  };

  if (loading) {
    return (
      <div>
        <Loader size={43} className=" animate-spin text-blue-500" />
        <p>ready.....</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Select your favorite user:
      </h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => handleUserClick(user)}
            className="p-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-colors"
          >
            <p className="font-medium text-black">{user.name}</p>
            <p className="font-medium text-black">{user.username}</p>
            <p className="text-sm text-blue-500">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPicker;
