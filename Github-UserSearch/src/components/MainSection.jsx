import useState  from "react";
import SearchBar from "./SearchBar"
import ProfileCard from './UserProfile'
import { Loader } from "lucide-react";
import UserProfile from "./UserProfile";





const MainSection = () =>{
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.github.com/users');
      if (!response.ok) {
        throw new Error("can not find user");
      }
      const data = await response.json();
      setUserData(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  {loading && (
    <div className="mt-6">
    <Loader/>
    </div>
  )}
  
 
  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen flex flex-col items-center p-4`}>
      <div className="flex justify-between w-full max-w-md mb-6">
        <h1 className="text-3xl font-bold">devfinder</h1>
        <button
          onClick={toggleTheme}
          className="text-sm uppercase tracking-widest font-semibold"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
        <div>
        <SearchBar onSearch={fetchUser} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {loading && <p className="mt-4 animate-pulse text-blue-500">Loading...</p>}
      {userData && <ProfileCard user={userData} theme={theme} />}
        </div>
        <div>
        <UserProfile/>
        </div>
    

    </div>
  );
}
 export default MainSection