import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const regex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/;

    if (!regex.test(email)) {
      setError("❌ Please enter a valid email address.");
      return;
    }

    setError(""); // clear error if valid
    alert("✅ Login successful!");
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
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
        placeholder="Password"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
