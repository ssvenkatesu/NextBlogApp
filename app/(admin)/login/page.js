"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

let Page = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("adminName", name);
    localStorage.setItem("adminPassword", password);
    
    router.push("/list");  
  }; 

  return (
    <>
      <div className="container">
        <div className="form-box">
          <h1>Admin Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter User Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <style jsx>{
      `
        .container {
          height: 100vh;
          width: 100vw;
          background: linear-gradient(to right, #e0f7fa, #ffffff);
          display: flex;
          justify-content: center;
          color:black;
          align-items: center;
          font-family: "sans-serif";
        }

        .form-box {
          padding: 2rem;
          background-color: white;
          color: #333;
          width: 300px;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
          animation: fadeIn 0.6s ease-in-out;
          color:black;
        }

        h1 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #00796b;
        }

        label {
          display: block;
          margin: 10px 0 5px;
          font-weight: 500;
        }

        input {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 6px;
          color:black;
          background-color: #f9f9f9;
        }

        input:focus {
          border-color: #00796b;
          outline: none;
          background-color: #fff;
        }

        button {
          width: 100%;
          padding: 10px;
          background-color: #e53935;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #c62828;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Page;
