
"use client";
import { useParams } from "next/navigation";

const Blogdetails = () => {
  const { blogId } = useParams();

  const moviedata = {
    title: `Blog Id ${blogId}`,
    description: `This is a detailed description of Blog Number ${blogId}. It is a thrilling movie with an exciting plot and outstanding performances.`,
    genre: "Action / Adventure",
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "3rem auto",
        padding: "2.5rem 2rem",
        background: "linear-gradient(135deg, #f8fafc, #e0f7fa)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        borderRadius: "15px",
        color: "#222",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        lineHeight: "1.6",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          marginBottom: "1rem",
          color: "#00796b",
          textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        🎬 {moviedata.title}
      </h1>

      <p
        style={{
          fontSize: "1.1rem",
          marginBottom: "1.5rem",
          borderLeft: "5px solid #00796b",
          paddingLeft: "1rem",
          backgroundColor: "#e0f2f1",
          borderRadius: "8px",
          fontWeight: "500",
        }}
      >
        <strong>Description:</strong> {moviedata.description}
      </p>

      <p
        style={{
          fontSize: "1.1rem",
          fontWeight: "600",
          color: "#004d40",
          backgroundColor: "#b2dfdb",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          display: "inline-block",
          boxShadow: "inset 0 0 5px rgba(0,0,0,0.1)",
        }}
      >
        <strong>Genre:</strong> {moviedata.genre}
      </p>
    </div>
  );
};

export default Blogdetails;
