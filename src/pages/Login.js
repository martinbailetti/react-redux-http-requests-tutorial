import React, {useEffect} from "react";



const Login = () => {
  

  useEffect(() => {
   localStorage.setItem("user", JSON.stringify({ token:"97989898987978" }));
  }, []);

  
  return (
    <div>
      Login
    </div>
  );
};

export default Login;
