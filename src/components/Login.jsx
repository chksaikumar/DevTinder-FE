import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

const Login = () => {
  const [email, setemail] = useState("sai@gmail.com");
  const [password, setpassword] = useState("Kumar$123");
  const [Error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${apiUrl}/login`,
        {
          emailId: email,
          password: password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(response.data));
      navigate("/");
      // You can redirect or store token here
    } catch (error) {
      console.error(error.response?.data?.err);
      setError(error.response?.data?.err || "Something went Error ");
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

            <div className="form-control mb-2">
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

            <p className="text-red-500">{Error}</p>

            <div className="form-control flex items-center justify-center mt-5">
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
