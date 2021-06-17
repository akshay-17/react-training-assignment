import React from "react";
import { Link } from "react-router-dom";

function HomeComponent() {
  return (
    <div className="flex display-4">
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default HomeComponent;
