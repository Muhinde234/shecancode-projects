import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ onSearch, theme }) => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      try {
        await onSearch(input.trim());
      } catch (error) {
        console.error("Error getting user:", error);
      }
      setInput("");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`flex w-full max-w-2xl rounded-xl overflow-hidden ${
        theme === "dark" ? "bg-gray-800" : "bg-white shadow"
      }`}
    >
      <div className="flex items-center pl-4">
        <Search className={`${theme === "dark" ? "text-blue-500" : "text-gray-500"}`} />
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search GitHub username..."
        className={`flex-grow p-4 focus:outline-none text-sm md:text-base ${
          theme === "dark"
            ? "bg-gray-800 text-white placeholder-gray-400"
            : "bg-white text-gray-900 placeholder-gray-500"
        }`}
      />
      <button
        type="submit"
        className={`mr-2 my-2 rounded-lg px-4 font-semibold text-sm md:text-base ${
          theme === "dark"
            ? "bg-blue-500 hover:bg-blue-600 text-white"
            : "bg-blue-400 hover:bg-blue-500 text-white"
        }`}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;