function Home() {

  const cardStyle = {
    width: "300px",
    backgroundColor: "white",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 4px 10px lightgray",
  };

  return (
    <div style={{ backgroundColor: "#f4f6fc", padding: "30px" }}>
      <div
        style={{
          background: "linear-gradient(#ff7e5f, #feb47b)",
          color: "cornsilk",
          textAlign: "center",
          padding: "60px",
          borderRadius: "20px",
          
        }}
      >
        <h1 className="sec"><b>Movies Section</b></h1>
        <p className="block">
          Discover the latest blockbuster movies and timeless classics. Book your tickets instantly and enjoy an unforgettable cinema experience.
        </p>
    </div>
    </div>
  );
}

export default Home;
