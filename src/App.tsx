import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/admin/SignUp";
import Create from "./pages/drivers/Create";
import Edit from "./pages/drivers/Edit";
import Listing from "./pages/drivers/Listing";
import { useEffect } from "react";
import { useData } from "./hooks/context/AppContext";
import SignIn from "./pages/admin/SignIn";
import DriverProfile from "./pages/drivers/Profile";
import Profile from "./pages/admin/Profile";

function App() {
  const navigate = useNavigate();
  const {
    adminId,
    getAdminProfile,
    reset,
    logOut,
    setAdminId,
    regetAdminProfile,
    turnOffApp,
  } = useData();

  useEffect(() => {
    getAdminProfile();
  }, [adminId]);

  useEffect(() => {
    if (!adminId) {
      localStorage.getItem("adminId");
      setAdminId(localStorage.getItem("adminId") as string);
    }
    regetAdminProfile();
  }, [adminId]);

  return (
    <div>
      {adminId ? (
        <>
          <div>
            <button onClick={() => navigate("/drivers")}>drivers</button>
            <button onClick={() => navigate(`/admin-profile`)}>profile</button>
            <button
              onClick={() => {
                reset();
                navigate("/create-driver");
              }}
            >
              create
            </button>
            <button onClick={logOut}>logout</button>
            <button onClick={turnOffApp}>trun off</button>
          </div>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/admin-profile" element={<Profile />} />
            <Route path="/create-driver" element={<Create />} />
            <Route path="/driver-profile/:id" element={<DriverProfile />} />
            <Route path="/drivers" element={<Listing />} />
            <Route path="/edit-driver/:id" element={<Edit />} />
          </Routes>
        </>
      ) : (
        <>
          <button onClick={turnOffApp}>trun off</button>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
