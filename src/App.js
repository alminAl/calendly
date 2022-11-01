import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Enterprise from "./pages/Enterprise";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Teams from "./pages/Teams";
import DashboardMain from "./components/Dashboard/DashboardMain";
import Error404 from "./components/SharedComponent/Error404/Error404";
import About from "./pages/About";
import { useAuthContext } from "./hooks/useAuthContext";
function App() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/teams" element={<Teams />} />
            {/* <Route path="/profile" element={!user ? <Profile /> : <Navigate to='/login' />} /> */}
            <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to='/' />} />

            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/signup" element={<Signup />} /> */}

            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={user ? <DashboardMain /> : <Navigate to='/login' />
            }>

            </Route>
            <Route path="/profile" element={<Profile />} />




            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
