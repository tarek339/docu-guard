import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/admin/SignUp";
import SignIn from "./pages/admin/SignIn";
import Create from "./pages/drivers/Create";
import Edit from "./pages/drivers/Edit";
import Profile from "./pages/drivers/Profile";
import Listing from "./pages/drivers/Listing";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => navigate("/drivers")}>drivers</button>
        <button onClick={() => navigate("/create-driver")}>create</button>
      </div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-driver" element={<Create />} />
        <Route path="/driver-profile/:id" element={<Profile />} />
        <Route path="/drivers" element={<Listing />} />
        <Route path="/edit-driver/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
