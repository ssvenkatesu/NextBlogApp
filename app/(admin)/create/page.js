"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now().toString(),
      title,
      content,
    };

    const stored = localStorage.getItem("adminBlogs");
    const blogs = stored ? JSON.parse(stored) : [];
    blogs.push(newBlog);
    localStorage.setItem("adminBlogs", JSON.stringify(blogs));
    router.push("./list");
  };

  return (
    <>
      <div className="container">
        <div className="form-box">
          <h1>Create Blog</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Blog Title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Blog Content"
              value={content}
              required
              onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Create</button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
          width: 100vw;
          
          background: linear-gradient(to right, #fff3e0, #ffe0b2);
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: sans-serif;
        }

        .form-box {
          background-color: white;
          padding: 2rem;
          width: 350px;
          border-radius: 12px;
          color:black;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        h1 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #d84315;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 1rem;
          border: 2px solid #333;
          border-radius: 6px;
          background-color: #fdfdfd;
          resize: vertical;
          font-size: 1rem;
          color:black;
        }

        input:focus,
        textarea:focus {
          outline: none;
          border-color: #d84315;
          background-color: #fff;
        }

        textarea {
          height: 120px;
        }

        button {
          padding: 10px;
          background-color: #d84315;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
          font-size: 1rem;
        }

        button:hover {
          background-color: #b71c1c;
        }
      `}</style>
    </>
  );
}
