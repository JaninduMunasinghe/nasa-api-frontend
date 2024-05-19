import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Hero, Navbar, Apod } from "./components";
import PariclesBackground from "./components/ParticlesBackground";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MarsExplorer from "./pages/MarsExplorer";
import Protected from "./components/Protected";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/mars-rover" index element={<MarsExplorer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
