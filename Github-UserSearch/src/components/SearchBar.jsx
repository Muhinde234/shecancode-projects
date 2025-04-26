import  useState  from "react";

const SearchBar=({ onSearch }) =>{
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput("");
    }
  };
   if(input === " "){
    
   }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md bg-gray-800 rounded-xl overflow-hidden">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search GitHub username…"
        className="flex-grow bg-gray-800 p-4 text-white placeholder-gray-400 focus:outline-none"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 p-4 font-semibold">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
