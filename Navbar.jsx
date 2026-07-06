function Navbar({ setPage }) {
  return (
    <nav
      style={{
        background:
          "linear-gradient(#ff7e5f, #feb47b)",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        
      }}
    >
      <div>
        <h1
          style={{
            margin: "0",
            fontSize: "32px",
          }}>
          🎟 EventHub
        </h1>

        
      </div>

      
      <div>

        <button
          onClick={() => setPage("home")}
          style={buttonStyle}
          clasName="home"
        ><b>
          Home</b>
        </button>

        <button
          onClick={() => setPage("login")}
          style={buttonStyle}
          className="log"
        ><b>
          Login</b>
        </button>

        <button
          onClick={() => setPage("signup")}
          style={buttonStyle}
           className="sign"
        ><b>
          Sign Up</b>
        </button>

        <button
          onClick={() => setPage("movies")}
          style={buttonStyle}
          className="mov"
        ><b>
          Movies</b>
        </button>

        <button
          onClick={() => setPage("concerts")}
          style={buttonStyle}
          className="con"
        ><b>
          Concerts</b>
        </button>

        <button
          onClick={() => setPage("sports")}
          style={buttonStyle}
          className="spo"
        ><b>
          Sports</b>
        </button>

        <button
          onClick={() => setPage("reviews")}
          style={buttonStyle}
          className="rev"
        ><b>
          Review Form</b>
        </button>
        

      </div>
    </nav>
  );
}

const buttonStyle = {
  marginLeft: "10px",
  padding: "10px 18px",
  borderRadius: "25px",
  border: "none",
  cursor: "pointer",
  fontSize: "15px",
  color:"red"
};

export default Navbar;

