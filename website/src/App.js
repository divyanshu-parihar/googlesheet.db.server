import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./contexts/auth";
import { Dashboard,Login } from "./pages";

function App() {
  return (
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route exact path="/dashboard" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
  );
}

export default App;
