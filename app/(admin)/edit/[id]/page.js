"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const EditBlog = () => {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState({ title: "", content: "" });

  useEffect(() => {
    const stored = localStorage.getItem("adminBlogs");
    const blogs = stored ? JSON.parse(stored) : [];
    const existing = blogs.find((b) => b.id === id);
    if (existing) {
      setBlog(existing);
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const stored = localStorage.getItem("adminBlogs");
    let blogs = stored ? JSON.parse(stored) : [];

    blogs = blogs.map((b) =>
      b.id === id ? { ...b, title: blog.title, content: blog.content } : b
    );

    localStorage.setItem("adminBlogs", JSON.stringify(blogs));
    router.push("/list");
  };

  return (
    <>
      <div className="edit-container">
        <div className="form-box">
          <h1>Edit Blog</h1>
          <form onSubmit={handleUpdate}>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            />

            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={blog.content}
              onChange={(e) => setBlog({ ...blog, content: e.target.value })}
            />

            <button type="submit">Submit Me</button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .edit-container {
          height: 100vh;
          width: 100vw;
          background: linear-gradient(to right, #fffde7, #f0f4c3);
          display: flex;
          justify-content: center;
          align-items: center;
          font-family:  sans-serif;
        }

        .form-box {
          background-color: white;
          padding: 2rem;
          width: 350px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        h1 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #33691e;
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-weight: 600;
          color: #333;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          background-color: #fdfdfd;
          color:black;
          resize: vertical;
        }

        input:focus,
        textarea:focus {
          outline: none;
          border-color: #689f38;
          background-color: #fff;
          color:black;
        }

        textarea {
          height: 120px;
        }

        button {
          width: 100%;
          padding: 10px;
          background-color: #e53935;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #c62828;
        }
      `}</style>
    </>
  );
};

export default EditBlog;
