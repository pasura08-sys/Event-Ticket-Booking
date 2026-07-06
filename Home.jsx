import { useState } from "react";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    {
      title: "Avengers Endgame",
      category: "Movie 🎬",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
      location: "PVR Cinemas",
      date: "15 June 2026",
      price: "₹250",
    },
    {
      title: "Pushpa 3",
      category: "Movie 🎬",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1",
      location: "INOX Cinemas",
      date: "18 June 2026",
      price: "₹300",
    },
    {
      title: "Interstellar Re-Release",
      category: "Movie 🎬",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
      location: "PVR Cinemas",
      date: "22 June 2026",
      price: "₹350",
    },
    {
      title: "Arijit Singh Live",
      category: "Concert 🎤",
      image:
        "https://images.news18.com/ibnlive/uploads/2025/03/MixCollage-27-Mar-2025-04-27-PM-7101-2025-03-d0d8043335f19225f216cde07187828f.jpg",
      location: "Hyderabad Stadium",
      date: "20 June 2026",
      price: "₹999",
    },
    {
      title: "Anirudh Music Fest",
      category: "Concert 🎤",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
      location: "Chennai Arena",
      date: "25 June 2026",
      price: "₹1200",
    },
    {
      title: "Rock Night Festival",
      category: "Concert 🎤",
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b",
      location: "Bangalore Grounds",
      date: "30 June 2026",
      price: "₹1500",
    },
    {
      title: "IPL Final Match",
      category: "Sports 🏏",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
      location: "Rajiv Gandhi Stadium",
      date: "25 June 2026",
      price: "₹500",
    },
    {
      title: "India vs Australia",
      category: "Sports 🏏",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      location: "Wankhede Stadium",
      date: "05 July 2026",
      price: "₹800",
    },
    {
      title: "Football Champions Cup",
      category: "Sports ⚽",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
      location: "Goa Sports Arena",
      date: "10 July 2026",
      price: "₹700",
    },
    {
      title: "Kabaddi League Final",
      category: "Sports 🤼",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2b/919-9198627_the-league-will-continue-its-existing-format-and.png",
      location: "Indoor Sports Complex",
      date: "15 July 2026",
      price: "₹450",
    },
    {
      title: "Basketball Championship",
      category: "Sports 🏀",
      image: "https://images.eurohoops.net/2023/06/9c97a4e2-bcl-teams.jpg",
      location: "National Indoor Arena",
      date: "22 August 2026",
      price: "₹600",
    },
    {
      title: "Badminton Open Finals",
      category: "Sports 🏸",
      image:
        "https://s.rfi.fr/media/display/0bb53500-7f39-11f0-8926-005056bf30b7/w:1024/p:16x9/Popov-Olympics2.jpg",
      location: "City Sports Hall",
      date: "10 September 2026",
      price: "₹350",
    },
  ];

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBookNow = () => {
    alert("Please login or Signup first");
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f6fc",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "50px",
          borderRadius: "20px",
          color: "white",
          background: "linear-gradient(#ff7e5f, #feb47b)",
        }}
      >
        <h1 style={{ fontSize: "45px" }}>Welcome to EventHub</h1>
        <p style={{ fontSize: "20px" }}>
          Book Movies, Concerts & Sports Events
        </p>
      </div>

      {/* Search Bar */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <input
          type="text"
          placeholder="🔍 Search "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "60%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
            outline: "none",
          }}
        />
      </div>

      <h2 style={{ marginTop: "40px" }}>
        <b>Trending Events🔥</b>
      </h2>

      {filteredEvents.length === 0 ? (
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>
          No events found 
        </h3>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              style={{
                width: "320px",
                backgroundColor: "white",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <img
                src={event.image}
                alt={event.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h2>{event.title}</h2>
                <p>
                  <strong>Category:</strong> {event.category}
                </p>
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
                <p>
                  <strong>Date:</strong> {event.date}
                </p>
                <p>
                  <strong>Price:</strong> {event.price}
                </p>

                <button
                  onClick={handleBookNow}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "none",
                    borderRadius: "8px",
                    background: "linear-gradient(#ff7e5f, #feb47b)",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;