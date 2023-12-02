import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useAdminData } from "./context/AdminContext";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./pages/Dashboard";
import { Authentification, Profile } from "./pages/admin";
import { Create, DriverProfile, Edit, Listing } from "./pages/drivers";
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
import { Block, GridNoSpace } from "./components/parents/container";
import { NavBar, SideBar } from "./components";

function App() {
  const { adminId, getAdminProfile } = useAdminData();

  useEffect(() => {
    getAdminProfile();
  }, [adminId]);

  return (
    <AnimatePresence mode="wait">
      {adminId ? (
        <>
          <NavBar />
          <GridNoSpace style={{ columnGap: "25px" }}>
            <SideBar />
            <Block style={{ marginTop: "128px" }}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/account" element={<Profile />} />

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
            </Block>
          </GridNoSpace>
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
