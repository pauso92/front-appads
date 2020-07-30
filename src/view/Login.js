import React from "react";
import { Link } from "react-router-dom";
import '../css/login.css'

const Login = () => {
  return (
    <div className="wrap">
      <Link to="/home">Sing in</Link>
    </div>
  );
}
export default Login