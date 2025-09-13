import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth.css";
import axios from "axios";
import { toast, Slide } from "react-toastify";

const PartnerLogin = () => {
  const navigate = useNavigate();
  const apiUrl =
    import.meta.env.VITE_PARTNER_API_URL || import.meta.env.VITE_API_URL || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email, password };

    const toastId = toast.loading("Signing in...");
    try {
      const res = await axios.post(`${apiUrl}auth/partner/login`, data);
      toast.update(toastId, {
        render: "Partner signed in",
        type: "success",
        isLoading: false,
        autoClose: 2000,
        transition: Slide,
      });
      setTimeout(() => navigate("/partner"), 700);
    } catch (err) {
      const msg = err?.response?.data?.message || err.message || "Login failed";
      toast.update(toastId, {
        render: msg,
        type: "error",
        isLoading: false,
        autoClose: 4000,
        transition: Slide,
      });
    }
  };

  return (
    <div className="auth-page">
      <form
        className="auth-card"
        onSubmit={handleSubmit}
        aria-label="Food Partner Login Form"
      >
        <h2>Partner sign in</h2>
        <p className="subtitle">Access your food-partner dashboard</p>

        <div className="auth-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="partner@example.com"
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
          <button type="button" className="primary">
            Sign in
          </button>
        </div>

        <div className="alt">
          New partner? <Link to="/food-partner/register">Create account</Link>
        </div>
        <div className="switch">
          Have customers? <Link to="/user/login">Sign in as user</Link>
        </div>
      </form>
    </div>
  );
};

export default PartnerLogin;
