import { motion } from "framer-motion";
import { Github, Link, MapPin, Twitter } from "lucide-react";
import github from '../assets/github.jpeg';

const UserProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-52 bg-[#1E2A47] rounded-2xl p-6 w-full max-w-2xl  text-white"
    >
  
      <div className="flex flex-col sm:flex-row gap-10">
       
        <div className="flex-shrink-0">
          <img src={github} alt="User Avatar" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover" />
        </div>


        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start">
            <h1 className="text-xl font-bold">The Octocat</h1>
            <p className="text-gray-400 text-sm">Joined 25 Jan 2011</p>
          </div>
          <p className="text-blue-400">@octocat</p>

          
          <p className="text-gray-300 mt-4">
            This profile has no bio
          </p>

          
          <div className="bg-[#141D2F] rounded-xl p-4 mt-6 flex justify-between text-center">
            <div>
              <p className="text-xs text-gray-400">Repos</p>
              <p className="font-bold text-lg">8</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Followers</p>
              <p className="font-bold text-lg">3938</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Following</p>
              <p className="font-bold text-lg">9</p>
            </div>
          </div>

       
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <p className="text-sm text-white">San Francisco</p>
            </div>
            <div className="flex items-center gap-3">
              <Twitter className="w-5 h-5 text-gray-400" />
              <p className="text-sm text-gray-400">Not Available</p>
            </div>
            <div className="flex items-center gap-3">
              <Link className="w-5 h-5 text-gray-400" />
              <a href="https://github.blog" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:underline">
                https://github.blog
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-gray-400" />
              <a href="https://github.com/github" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:underline">
                @github
              </a>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;
