import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth.css";
import axios from "axios";
import { Bounce, Slide, toast } from "react-toastify";

const PartnerRegister = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL || "";

  const handleRegister = async (e) => {
    e.preventDefault();
    const contactName = e.target.business.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const password = e.target.password.value;

    const data = { name, email, password, contactName, phone, address };
    const toastId = toast.loading("Process...");

    try {
      const res = await axios.post(
        `${apiUrl}auth/food-partner/register`,
        data,
        { withCredentials: true }
      );

      const msg = res?.data?.message || "Food partner registered successfully";

      toast.update(toastId, {
        render: msg,
        type: "success",
        isLoading: false,
        autoClose: 3000,
        transition: Bounce,
      });
      setTimeout(() => {
        navigate("/food-partner");
      }, 500);
    } catch (err) {
      const msg =
        err?.response?.data?.message || err?.message || "Registration failed";
      toast.update(toastId, {
        render: msg,
        type: "error",
        isLoading: false,
        autoClose: 3000,
        transition: Slide,
      });
    }
  };

  return (
    <div className="auth-page">
      <form
        className="auth-card"
        onSubmit={handleRegister}
        method="post"
        aria-label="Food Partner Register Form"
      >
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
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" />
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
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="number"
            placeholder="985621458"
          />
        </div>
        <div className="auth-field">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="A-1212 Delhi"
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
