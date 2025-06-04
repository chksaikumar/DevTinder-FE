import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState("Kumar@gmail.com");
  const [password, setpassword] = useState("Kumar$123");

  const LoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:7777/login",
        {
          emailId: email,
          password: password,
        },
        { withCredentials: true }
      );
      console.log("✅ Login Success:", response.data);
      // You can redirect or store token here
    } catch (error) {
      console.error("❌ Login Error:", error.response?.data || error.message);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <form onSubmit={LoginHandler}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                value={email}
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                value={password}
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            <div className="form-control">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>

          <p className="text-center mt-4 text-sm">
            Don't have an account?{" "}
            <a href="/register" className="text-primary hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
