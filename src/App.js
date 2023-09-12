import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Products from "./pages/Products";
import User from "./pages/User";
import Protected from "./components/router/Protected";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

function App() {
  console.log("APP");

  const auth = localStorage.getItem("auth");
  console.log("auth", auth);
  var authObject = {};
  if (auth) {
    try {
      authObject = JSON.parse(auth);
    } catch (error) {
      localStorage.removeItem("auth");
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/products"
          element={
            <Protected isSignedIn={authObject.token ? true : false}>
              <Products />
            </Protected>
          }
        />
        <Route
          path="/users/:id"
          element={
            <Protected isSignedIn={authObject.token ? true : false}>
              <User />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
