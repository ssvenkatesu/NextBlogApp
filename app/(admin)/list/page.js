
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

let AdminHome = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("adminBlogs");
    setBlogs(stored ? JSON.parse(stored) : []);
  }, []);

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
          fontSize: "2rem",
          color: "#333",
        }}
      >
        All Blogs
      </h1>

      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <Link
          href={`/create`}
          style={{
            backgroundColor: "#e00",
            color: "white",
            padding: "0.6rem 1.2rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: "bold",
            display: "inline-block",
          }}
        >
          + Create Blog
        </Link>
      </div>

      {blogs.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            color: "#666",
          }}
        >
          No blogs found.
        </p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            borderRadius: "12px",
            overflow: "hidden",
            color: "black",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#0070f3",
                color: "white",
                textAlign: "left",
              }}
            >
              <th style={{ padding: "1rem" }}>Title</th>
              <th style={{ padding: "1rem" }}>Content</th>
              <th style={{ padding: "1rem", width: "150px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr
                key={blog.id}
                style={{
                  borderBottom: "1px solid #ddd",
                }}
              >
                <td style={{ padding: "1rem", verticalAlign: "top" }}>
                  {blog.title}
                </td>
                <td
                  style={{
                    padding: "1rem",
                    verticalAlign: "top",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {blog.content}
                </td>
                <td
                  style={{
                    padding: "1rem",
                    verticalAlign: "top",
                    display: "flex",
                    gap: "0.5rem",
                  }}
                >
                  <Link
                    href={`/edit/${blog.id}`}
                    style={{
                      backgroundColor: "#0070f3",
                      color: "white",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      display: "inline-block",
                      textAlign: "center",
                    }}
                  >
                    Edit
                  </Link>
                  <Link
                    href={`/delete/${blog.id}`}
                    style={{
                      backgroundColor: "#e00",
                      color: "white",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      display: "inline-block",
                      textAlign: "center",
                    }}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminHome;
