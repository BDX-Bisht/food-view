import React from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

const PartnerLogin = () => {
  return (
    <div className="auth-page">
      <form className="auth-card" aria-label="Food Partner Login Form">
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
