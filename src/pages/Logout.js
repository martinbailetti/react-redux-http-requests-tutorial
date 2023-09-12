import React from "react";
import { useEffect } from "react";



const Logout = () => {

    useEffect(() => {
      localStorage.removeItem("user");
      }, []);
  
  return (
    <div>
      Logout
    </div>
  );
};

export default Logout;
