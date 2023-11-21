import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/admin/SignUp";
import SignIn from "./pages/admin/SignIn";
import Create from "./pages/drivers/Create";
import Edit from "./pages/drivers/Edit";
import Profile from "./pages/drivers/Profile";
import Listing from "./pages/drivers/Listing";
import { useEffect } from "react";
import { useData } from "./hooks/context/AppContext";

function App() {
  const navigate = useNavigate();
  const { admin, setAdminId, signIn, reset } = useData();

  useEffect(() => {
    signIn();
  }, []);

  const logOut = () => {
    localStorage.removeItem("adminId");
    localStorage.removeItem("adminUser");
    setAdminId("");
    navigate("sign-in");
  };

  return (
    <div>
      {admin ? (
        <>
          <div>
            <button onClick={() => navigate("/drivers")}>drivers</button>
            <button
              onClick={() => {
                reset();
                navigate("/create-driver");
              }}
            >
              create
            </button>
            <button onClick={logOut}>logout</button>
          </div>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/create-driver" element={<Create />} />
            <Route path="/driver-profile/:id" element={<Profile />} />
            <Route path="/drivers" element={<Listing />} />
            <Route path="/edit-driver/:id" element={<Edit />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
