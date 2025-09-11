import React from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

const PartnerRegister = () => {
  return (
    <div className="auth-page">
      <form className="auth-card" aria-label="Food Partner Register Form">
        <h2>Create partner account</h2>
        <p className="subtitle">
          Register as a food partner to list your kitchen
        </p>

        <div className="auth-field">
          <label htmlFor="business">Business name</label>
          <input
            id="business"
            name="business"
            type="text"
            placeholder="Your kitchen / restaurant name"
          />
        </div>

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
            Create account
          </button>
        </div>

        <div className="alt">
          Already have an account? <Link to="/food-partner/login">Sign in</Link>
        </div>
        <div className="switch">
          Registering customers?{" "}
          <Link to="/user/register">Register as user</Link>
        </div>
      </form>
    </div>
  );
};

export default PartnerRegister;
