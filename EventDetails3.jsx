function Home() {
 const cardStyle = {
    width: "300px",
    backgroundColor: "white",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 4px 10px lightgray",
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f6fc",
        padding: "30px",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          background:
            "linear-gradient(#ff7e5f, #feb47b)",
          color: "cornsilk",
          textAlign: "center",
          padding: "60px",
          borderRadius: "20px",
        }}
      >
        <h1 className="sec">Sports Section</h1>
        <p className="block">
          Book tickets for exciting matches and enjoy the action live from the stadium.
        </p>
      </div>
    </div>
  );
}

export default Home;