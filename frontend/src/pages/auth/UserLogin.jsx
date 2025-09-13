import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth.css";
import axios from "axios";
import { toast, Slide } from "react-toastify";

const UserLogin = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL || "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email, password };
    const toastId = toast.loading("Signing in...");
    try {
      const res = await axios.post(`${apiUrl}auth/user/login`, data, {
        withCredentials: true,
      });
      const msg = res?.data?.message || "User login successfully.";
      // success
      toast.update(toastId, {
        render: msg,
        type: "success",
        isLoading: false,
        autoClose: 2000,
        transition: Slide,
      });
      setTimeout(() => navigate("/"), 500);
    } catch (err) {
      const msg = err?.response?.data?.message || err.message || "Login failed";
      toast.update(toastId, {
        render: msg,
        type: "error",
        isLoading: false,
        autoClose: 2000,
        transition: Slide,
      });
    }
  };

  return (
    <div className="auth-page">
      <form
        className="auth-card"
        method="post"
        onSubmit={handleSubmit}
        aria-label="User Login Form"
      >
        <h2>Welcome back</h2>
        <p className="subtitle">Sign in to your user account</p>

        <div className="auth-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
        </div>

        <div className="auth-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
          />
        </div>

        <div className="button-row">
          <button type="submit" className="primary">
            Sign in
          </button>
        </div>

        <div className="alt">
          New here? <Link to="/user/register">Create account</Link>
        </div>
        <div className="switch">
          Are you a food partner?{" "}
          <Link to="/food-partner/login">Partner sign in</Link>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
