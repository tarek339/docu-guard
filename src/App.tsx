import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import CreateDriver from "./pages/CreateDriver";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import DriverProfile from "./pages/DriverProfile";
import Drivers from "./pages/Drivers";
import EditDriver from "./pages/EditDriver";

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
        <Route path="/create-driver" element={<CreateDriver />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/driver-profile/:id" element={<DriverProfile />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/edit-driver/:id" element={<EditDriver />} />
      </Routes>
    </div>
  );
}

export default App;
