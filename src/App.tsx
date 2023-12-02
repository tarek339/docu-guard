import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./pages/drivers/Create";
import Edit from "./pages/drivers/Edit";
import Listing from "./pages/drivers/Listing";
import { useEffect } from "react";
import DriverProfile from "./pages/drivers/Profile";
import Profile from "./pages/admin/Profile";
import { useAdminData } from "./context/AdminContext";
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
import NavBar from "./components/NavBar";
import Block from "./components/parents/container/Block";
import Dashboard from "./pages/Dashboard";

function App() {
  // const navigate = useNavigate();
  const { adminId, getAdminProfile } = useAdminData();
  // const { resetDriver } = useDriversData();
  // const { turnOffApp, logOut } = useFunctionsData();

  useEffect(() => {
    getAdminProfile();
  }, [adminId]);

  return (
    <AnimatePresence mode="wait">
      {adminId ? (
        <>
          <NavBar />
          <Block style={{ marginTop: "128px" }}></Block>
          <Routes>
            <Route path="/dashboarf" element={<Dashboard />} />

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
            <Route path="/trailer-profile/:id" element={<TrailersProfile />} />
            <Route path="/edit-trailer/:id" element={<EditTrailer />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Authentification />} />
          </Routes>
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
