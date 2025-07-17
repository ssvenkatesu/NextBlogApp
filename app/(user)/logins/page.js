"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

let Page = () => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
   const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", name);
    localStorage.setItem("userPassword", password);
   
    router.push("/blog");

  };

  return (
    <>
      <div className="container">
        <div className="form-box">
          <h1>User Login</h1>
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

      <style jsx>{`
        .container {
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          color:black;
          background: linear-gradient(to right, #e3f2fd, #ffffff);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .form-box {
          background-color: white;
          padding: 2rem;
          width: 320px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          animation: fadeIn 0.6s ease;
        }

        h1 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #1565c0;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        label {
          margin: 0.5rem 0 0.25rem;
          font-weight: 500;
        }

        input {
          padding: 0.6rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          margin-bottom: 1rem;
          background-color: #f9f9f9;
          color:black;
        }

        input:focus {
          outline: none;
          border-color: #1565c0;
          background-color: #fff;
        }

        button {
          padding: 0.7rem;
          background-color: #d32f2f;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #b71c1c;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-15px);
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
