import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center p-6">
        <h1 className="text-7xl font-bold text-error">404</h1>
        <p className="text-2xl mt-4 text-base-content">Oops! Page not found.</p>
        <p className="mt-2 text-base-content">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
          <Link to="/contact" className="btn btn-ghost ml-2">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
