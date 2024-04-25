import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Profile from "./pages/Profile";
import Program from "./pages/Program";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Night from "./pages/Night";
import "./App.css";
import "./styles/background.css";
import { unAuthGuard } from "./guards/authGuard.js";

function App() {
  return (
    <div className="space">
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <Routes>
        <Route path="/login" element={<Login />} onEnter={unAuthGuard} />
        <Route path="/register" element={<SignUp />} onEnter={unAuthGuard} />
        <Route path="/" element={<Navbar />}>
          <Route path="" element={<Dashboard />} />
          <Route path="program" element={<Program />} />
          <Route path="night" element={<Night />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
