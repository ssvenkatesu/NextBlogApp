let Home = () => {
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .home-main {
          height: 100vh;
          width: 100vw;
          background: linear-gradient(135deg, #e0f7fa, #b2ebf2);
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: 2rem;
          color: #004d40;
        }

        .home-box {
          text-align: center;
          background-color: #ffffff;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          animation: fadeIn 1s ease-in-out;
          max-width: 500px;
        }

        .home-box h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .home-box h1 span {
          color: #00796b;
        }

        .home-box p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        .home-buttons {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        .home-link {
          background-color: #00796b;
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 10px;
          text-decoration: none;
          transition: background-color 0.3s ease;
          font-weight: bold;
        }

        .home-link:hover {
          background-color: #004d40;
        }
      `}</style>

      <main className="home-main">
        <div className="home-box">
          <h1>
            Welcome to <span>Blog App</span>
          </h1>
          <p>Choose your portal:</p>
          <div className="home-buttons">
            <a href="/logins" className="home-link">User</a>
            <a href="/login" className="home-link">Admin</a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
