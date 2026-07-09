import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Home";
import Service from "./Service";
import AdminPage from "./component/AdminPage";
import Profile from "./Profile";
import AdminDashbord from "./AdminDashbord";
import Navbar from "./Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<h1>Not found</h1>} />

        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<AdminDashbord />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
