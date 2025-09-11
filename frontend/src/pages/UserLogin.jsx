import React from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

const UserLogin = () => {
  return (
    <div className="auth-page">
      <form className="auth-card" aria-label="User Login Form">
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
          <button type="button" className="primary">
            Sign in
          </button>
        </div>

        <div className="alt">
          New here? <Link to="/user/register">Create account</Link>
        </div>
        <div className="switch">
          Are you a food partner? <Link to="/food-partner/login">Partner sign in</Link>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
