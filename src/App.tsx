import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Create from "./pages/drivers/Create";
import Edit from "./pages/drivers/Edit";
import Listing from "./pages/drivers/Listing";
import { useEffect } from "react";
import DriverProfile from "./pages/drivers/Profile";
import Profile from "./pages/admin/Profile";
import { useAdminData } from "./hooks/context/AdminContext";
import { useDriversData } from "./hooks/context/DriversContext";
import { useFunctionsData } from "./hooks/context/FunctionsContext";
import CreateTruck from "./pages/trucks/CreateTruck";
import CreateTrailer from "./pages/trailers/CreateTrailer";
import TrucksListing from "./pages/trucks/TrucksListing";
import TrailersListing from "./pages/trailers/TrailersListing";
import TrucksProfile from "./pages/trucks/TrucksProfile";
import TrailersProfile from "./pages/trailers/TrailersProfile";
import EditTruck from "./pages/trucks/EditTruck";
import EditTrailer from "./pages/trailers/EditTrailer";
import Authentification from "./pages/admin/Authentification";
import { AnimatePresence } from "framer-motion";

function App() {
  const navigate = useNavigate();
  const { adminId, getAdminProfile } = useAdminData();
  const { resetDriver } = useDriversData();
  const { turnOffApp, logOut } = useFunctionsData();

  useEffect(() => {
    getAdminProfile();
  }, [adminId]);

  return (
    <div>
      <AnimatePresence mode="wait">
        {adminId ? (
          <>
            <div>
              <button onClick={() => navigate("/drivers")}>drivers</button>
              <button onClick={() => navigate("/trucks")}>trucks</button>
              <button onClick={() => navigate("/trailers")}>trailers</button>
              <button onClick={() => navigate(`/admin-profile`)}>
                profile
              </button>
              <button
                onClick={() => {
                  resetDriver();
                  navigate("/create-driver");
                }}
              >
                create driver
              </button>
              <button
                onClick={() => {
                  resetDriver();
                  navigate("/create-truck");
                }}
              >
                create truck
              </button>
              <button
                onClick={() => {
                  resetDriver();
                  navigate("/create-trailer");
                }}
              >
                create trailer
              </button>
              <button onClick={logOut}>logout</button>
              <button onClick={turnOffApp}>trun off</button>
            </div>
            <Routes>
              <Route path="/" element={<Authentification />} />
              <Route path="/admin-profile" element={<Profile />} />

              <Route path="/create-driver" element={<Create />} />
              <Route path="/driver-profile/:id" element={<DriverProfile />} />
              <Route path="/drivers" element={<Listing />} />
              <Route path="/edit-driver/:id" element={<Edit />} />

              <Route path="/create-truck" element={<CreateTruck />} />
              <Route path="/trucks" element={<TrucksListing />} />
              <Route path="/truck-profile/:id" element={<TrucksProfile />} />
              <Route path="/edit-truck/:id" element={<EditTruck />} />

              <Route path="/create-trailer" element={<CreateTrailer />} />
              <Route path="/trailers" element={<TrailersListing />} />
              <Route
                path="/trailer-profile/:id"
                element={<TrailersProfile />}
              />
              <Route path="/edit-trailer/:id" element={<EditTrailer />} />
            </Routes>
          </>
        ) : (
          <>
            {/* <button onClick={turnOffApp}>trun off</button> */}
            <Routes>
              <Route path="/" element={<Authentification />} />
            </Routes>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
