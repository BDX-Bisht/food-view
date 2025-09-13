import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth.css";
import axios from "axios";
import { Slide, toast } from "react-toastify";

const UserRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL || "";

  const navigate = useNavigate();

  const handleUserRegister = async (e) => {
    e.preventDefault();
    const data = { fullName: name, email, password };
    const toastId = toast.loading("Regsiter in progress..");

    try {
      const res = await axios.post(`${apiUrl}auth/user/register`, data, {
        withCredentials: true,
      });
      const msg = res?.data?.message || "User registered sucessfully...";
      toast.update(toastId, {
        render: msg,
        type: "success",
        isLoading: false,
        autoClose: 2000,
        transition: Slide,
      });
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      const msg =
        error.response.data.message || error.message || "Registration failed..";
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
      <form className="auth-card" onSubmit={handleUserRegister} method="post">
        <h2>Create account</h2>
        <p className="subtitle">Register as a user to order food</p>

        <div className="auth-field">
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Your name"
          />
        </div>

        <div className="auth-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="you@example.com"
          />
        </div>

        <div className="auth-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="••••••••"
          />
        </div>

        <div className="button-row">
          <button type="submit" className="primary">
            Create account
          </button>
        </div>

        <div className="alt">
          Already have an account? <Link to="/user/login">Sign in</Link>
        </div>
        <div className="switch">
          Are you a food partner?{" "}
          <Link to="/food-partner/register">Register as partner</Link>
        </div>
      </form>
    </div>
  );
};

export default UserRegister;
