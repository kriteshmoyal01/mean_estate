import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignOut from "./pages/Signout";
import About from "./pages/About";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignOut" element={<SignOut />} />
        <Route path="/About" element={<About />} /> {/* Corrected this line */}
        <Route path="/Profile" element={<Profile />} /> {/* Corrected this line */}
      </Routes>
    </BrowserRouter>
  );
}
