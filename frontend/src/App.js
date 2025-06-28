import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import { AuthProvider } from "./contexts/authContext";
import Authentication from "./pages/authentication";
import History from "./pages/history";
import HomeComponent from "./pages/home";
import LandingPage from './pages/landing';
import VideoMeetComponent from "./pages/videoMeet";

function App() {
  return (
    <div className="App">
    
    <Router>

      <AuthProvider>

      <Routes>

        <Route path='' element={<LandingPage/>} />

        <Route path="/auth" element={<Authentication/>}/>

        <Route path="/home" element={<HomeComponent/>}/>

        <Route path="/History" element={<History/>}/>

        <Route path="/:url" element={<VideoMeetComponent/>}/>

      </Routes>
</AuthProvider>
    </Router>
    
    </div>
  );
}

export default App;
