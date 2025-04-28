
import { FavoriteUserProvider } from './component/FavoriteUserContext';
import UserDisplay from './component/UserDisplay';

import UserPicker from './component/UserPicker';

function App() {
  return (
    <FavoriteUserProvider>
      <div className="container mx-auto px-4 py-8 max-w-3xl font-['Poppins']">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Favorite User Picker</h1>
        <div className="space-y-8">
          <UserDisplay />
          <UserPicker />
        </div>
      </div>
    </FavoriteUserProvider>
    
 
  );
}

export default App;