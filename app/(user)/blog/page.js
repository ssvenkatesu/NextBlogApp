
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AdminHome = () => {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("adminBlogs");
    setBlogs(stored ? JSON.parse(stored) : []);
  }, []);

  const handleRowClick = (id) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
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

      {blogs.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#666" }}>
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
              <th style={{ padding: "1rem" }}>ID</th>
              <th style={{ padding: "1rem" }}>Title</th>
              <th style={{ padding: "1rem" }}>Content</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(index+1)}
                style={{
                  borderBottom: "1px solid #ddd",
                  cursor: "pointer",
                }}
              >
                <td style={{ padding: "1rem" }}>{index + 1}</td>
                <td style={{ padding: "1rem" }}>{blog.title}</td>
                <td style={{ padding: "1rem", whiteSpace: "pre-wrap" }}>
                  {blog.content}
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

