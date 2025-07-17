"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditBlog() {
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

  const handleDelete = () => {
    const stored = localStorage.getItem("adminBlogs");
    let blogs = stored ? JSON.parse(stored) : [];

    blogs = blogs.filter((b) => b.id !== id);
    localStorage.setItem("adminBlogs", JSON.stringify(blogs));

    alert("Blog deleted successfully!");
    router.push("/list");
  };

  return (
    <>
      <div className="container">
        <div className="delete-box">
          <h1>Delete Blog</h1>
          <p>
            <strong>Title:</strong> {blog.title}
          </p>
          <p>
            <strong>Content:</strong> {blog.content}
          </p>
          <button onClick={handleDelete}>Delete Blog</button>
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

        .delete-box {
          padding: 2rem;
          background-color: white;
          color: #333;
          width: 350px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          text-align: left;
        }

        h1 {
          text-align: center;
          color: #d84315;
          margin-bottom: 1.5rem;
        }

        p {
          margin-bottom: 1rem;
          font-size: 1.1rem;
          line-height: 1.4;
        }

        strong {
          color: #4e342e;
        }

        button {
          width: 100%;
          padding: 12px;
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
}
