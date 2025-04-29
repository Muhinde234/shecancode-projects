import { Github, Link, MapPin, Twitter } from "lucide-react";

const UserProfile = ({ user, theme }) => {
  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  return (
    <div
      className={`mx-auto mt-6 relative rounded-2xl p-8 w-full h-[500px] md:h-full max-w-2xl ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900 shadow"
      }`}
    >
      <div className="relative h-full w-full flex gap-8">
        <div className="flex-shrink-0">
          <img
            src={user.avatar_url}
            alt2="User profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <h1 className="text-xl font-bold">{user.name || user.login}</h1>
              <p className={`${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
                @{user.login}
              </p>
            </div>
            <p className={`text-sm mt-2 md:mt-0 ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}>
              Joined {formatDate(user.created_at)}
            </p>
          </div>

          <div className="mt-3 absolute left-0 md:relative md:mt-0">
          <p className={`mt-4 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            {user.bio || "This profile has no bio"}
          </p>

          <div className={`rounded-xl p-4 mt-6 flex justify-around text-center ${
            theme === "dark" ? "bg-gray-900" : "bg-gray-100"
          }`}>
            <div>
              <p className="text-xs">Repos</p>
              <p className="font-bold text-lg">{user.public_repos}</p>
            </div>
            <div>
              <p className="text-xs">Followers</p>
              <p className="font-bold text-lg">{user.followers}</p>
            </div>
            <div>
              <p className="text-xs">Following</p>
              <p className="font-bold text-lg">{user.following}</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <MapPin className={`w-4 h-4 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`} />
              <p className={`text-sm ${
                !user.location && (theme === "dark" ? "text-gray-500" : "text-gray-400")
              }`}>
                {user.location || "Not available"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Twitter className={`w-4 h-4 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`} />
              <p className={`text-sm ${
                !user.twitter_username && (theme === "dark" ? "text-gray-500" : "text-gray-400")
              }`}>
                {user.twitter_username || "Not available"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link className={`w-4 h-4 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`} />
              <a
                href={user.blog || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm hover:underline ${
                  !user.blog
                    ? theme === "dark" ? "text-gray-500" : "text-gray-400"
                    : theme === "dark" ? "text-white" : "text-blue-600"
                }`}
              >
                {user.blog || "Not available"}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className={`w-4 h-4 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`} />
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm hover:underline ${
                  theme === "dark" ? "text-white" : "text-blue-600"
                }`}
              >
                @{user.login}
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;