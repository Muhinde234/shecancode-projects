import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";
import { Loader, Moon, Sun } from "lucide-react";

const MainSection = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(false);

  const fetchUser = async (username) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Cannot find user");
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

  useEffect(() => {
    fetchUser("octocat");
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      } min-h-screen flex flex-col items-center p-4 pt-20 transition-colors duration-300`}
    >
      <div className="flex justify-between w-full max-w-2xl mb-6">
        <h1 className="text-3xl font-bold">devfinder</h1>
        <button 
          onClick={toggleTheme} 
          className="flex items-center gap-2 cursor-pointer"
        >
          {theme === "dark" ? (
            <>
              <span className="text-sm font-semibold">LIGHT</span>
              <Sun className="w-5 h-5" />
            </>
          ) : (
            <>
              <span className="text-sm font-semibold">DARK</span>
              <Moon className="w-5 h-5" />
            </>
          )}
        </button>
      </div>

      <SearchBar onSearch={fetchUser} theme={theme} />

      {loading && (
        <div className="mt-6">
          <Loader className="animate-spin text-blue-500" />
        </div>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {userData && <UserProfile user={userData} theme={theme} />}
    </div>
  );
};

export default MainSection;