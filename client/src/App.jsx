import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignOut from "./pages/Signout";
import About from "./pages/About";
import Profile from "./pages/Profile";

import Contact from "./pages/Contact";
import Header from "./Components/Header";
 //Corrected the import

export default function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Use the Header component here */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignOut" element={<SignOut />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
