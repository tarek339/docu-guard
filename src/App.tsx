import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useAdminData } from "./context/AdminContext";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./pages/Dashboard";
import { Authentification, Profile } from "./pages/admin";
import {
  CreateTrailer,
  TrailersListing,
  TrailersProfile,
  EditTrailer,
} from "./pages/trailers";
import {
  CreateTruck,
  TrucksListing,
  TrucksProfile,
  EditTruck,
} from "./pages/trucks";
import { Block } from "./components/parents/container";
import { NavBar, SideBar } from "./components";
import Settings from "./pages/Settings";
import { DriversListing } from "./pages/drivers";

function App() {
  const { adminId, getAdminProfile } = useAdminData();

  useEffect(() => {
    getAdminProfile();
    window.api.getConfig();
  }, [adminId]);

  return (
    <AnimatePresence mode="wait">
      {adminId ? (
        <>
          <SideBar />

          <Block style={{ marginLeft: "280px" }}>
            <NavBar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />

              <Route path="/account" element={<Profile />} />

              <Route path="/drivers" element={<DriversListing />} />

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
          </Block>
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
