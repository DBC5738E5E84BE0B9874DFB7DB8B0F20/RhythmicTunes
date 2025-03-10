import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Songs from './Components/Songs';
import Sidebar from './Components/Sidebar';
import Favorities from './Components/Favorities';
import Playlist from './Components/Playlist';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <div>
          <Routes>
            {/* ✅ Add a default route for "/" */}
            <Route path="/" element={<Navigate to="/songs" />} />

            {/* Your existing routes */}
            <Route path="/songs" element={<Songs />} />
            <Route path="/favorities" element={<Favorities />} />
            <Route path="/playlist" element={<Playlist />} />

            {/* ✅ Handle unmatched routes (Optional) */}
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
