import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfounddiv">
                  <h1>Oops! You seem to be lost.</h1>
                  <p>Go back to home page</p>
                  <Link to="/">Home</Link>
              
    </div>
  );
};

export default NotFound;
