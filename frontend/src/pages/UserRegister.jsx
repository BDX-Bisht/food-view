import React from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

const UserRegister = () => {
  return (
    <div className="auth-page">
      <form className="auth-card" aria-label="User Register Form">
        <h2>Create account</h2>
        <p className="subtitle">Register as a user to order food</p>

        <div className="auth-field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" placeholder="Your name" />
        </div>

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
            Create account
          </button>
        </div>

        <div className="alt">
          Already have an account? <Link to="/user/login">Sign in</Link>
        </div>
        <div className="switch">
          Are you a food partner? <Link to="/food-partner/register">Register as partner</Link>
        </div>
      </form>
    </div>
  );
};

export default UserRegister;
