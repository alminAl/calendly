import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Enterprise from "./pages/Enterprise";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Teams from "./pages/Teams";
import Error404 from "./components/SharedComponent/Error404/Error404";
import About from "./pages/About";
import { useAuthContext } from "./hooks/useAuthContext";
import Events from "./pages/Events";
import Terms from "./components/SharedComponent/Footer/Terms";
import Contact from "./components/SharedComponent/Footer/Contact";
import Help from "./components/Help Center/Help";
import ScheduleEvent from "./pages/ScheduleEvent";
import EventType from "./pages/EventType";

function App() {
  const { user } = useAuthContext();
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/teams" element={<Teams />} />
            {/* <Route path="/profile" element={!user ? <Profile /> : <Navigate to='/login' />} /> */}
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />

            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/signup" element={<Signup />} /> */}

            <Route path="/about" element={<About />} />
            <Route
              path="/events"
              element={user ? <Events /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to="/" />}
            />
            <Route
              path="/eventType"
              element={user ? <EventType /> : <Navigate to="/" />}
            />
            <Route
              path="/scheduleEvent"
              element={user ? <ScheduleEvent /> : <Navigate to="/" />}
            />

            <Route path="/terms" element={<Terms />}></Route>
            <Route path="/help" element={<Help />}></Route>

            <Route path="/contact" element={<Contact></Contact>}></Route>

            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
