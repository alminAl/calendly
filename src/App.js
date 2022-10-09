import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Enterprise from "./pages/Enterprise";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Teams from "./pages/Teams";
import DashboardMain from "./components/Dashboard/DashboardMain";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/test" element={<DashboardMain />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
