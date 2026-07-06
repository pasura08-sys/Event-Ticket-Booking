import { useState } from "react";

function Signup({ setPage }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const regex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/;

    if (!regex.test(email)) {
      setError("❌ Please enter a valid email address.");
      return;
    }

    setError(""); // clear error if valid
    alert("✅ Signup successful!");
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "50px",
        borderRadius: "10px",
        boxShadow: "0 0 10px lightgray",
      }}
    >
      <h1 style={{
        marginBottom:"50px"
      }}>Signup</h1>

      <input
        type="text"
        placeholder="Enter Name"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />
      {error && (
        <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
      )}

      <input
        type="password"
        placeholder="Enter Password"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <button
        onClick={handleLogin}
        style={{
          width: "107%",
          padding: "10px",
          backgroundColor: "#667eea",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Register
      </button>
    </div>
  );
}

export default Signup;
