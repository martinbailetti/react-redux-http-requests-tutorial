import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";
import Users from "./pages/Users";
import Protected from "./components/router/Protected";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

function App() {
  console.log("APP");


  const token = localStorage.getItem("user");

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/users"
            element={
              <Protected isSignedIn={token ? true : false}>
                <Users />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
