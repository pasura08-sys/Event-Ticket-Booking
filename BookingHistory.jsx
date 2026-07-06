import { useState } from "react";

function BookingHistory() {
  const [filter, setFilter] = useState("ALL");

  const bookings = [
    {
      type: "MOVIE",
      title: "Avengers Endgame",
      details: "Seats: A1, A2",
      price: 500,
      date: "25 Jun 2026",
    },
    {
      type: "CONCERT",
      title: "Arijit Singh Live",
      details: "VIP Pass x2",
      price: 4000,
      date: "10 Jul 2026",
    },
    {
      type: "SPORT",
      title: "IPL Final",
      details: "East Stand - 3 Tickets",
      price: 2400,
      date: "18 Aug 2026",
    },
    {
      type: "MOVIE",
      title: "Interstellar",
      details: "Seats: B3, B4",
      price: 700,
      date: "02 Jun 2026",
    },
  ];

  const filtered =
    filter === "ALL"
      ? bookings
      : bookings.filter((b) => b.type === filter);

  const badgeColor = (type) => {
    switch (type) {
      case "MOVIE":
        return "#4f46e5";
      case "CONCERT":
        return "#16a34a";
      case "SPORT":
        return "#f97316";
      default:
        return "#6b7280";
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", background: "#f4f6fc" }}>

      {/*  HEADER */}
      <h2>🧾My Booking History</h2>

      {/* FILTER */}
      <div style={{ marginBottom: "20px" }}>
        {["ALL", "MOVIE", "CONCERT", "SPORT"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              marginRight: "10px",
              padding: "8px 15px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              backgroundColor: filter === f ? "black" : "#ddd",
              color: filter === f ? "white" : "black",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* BOOKINGS */}
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {filtered.map((b, i) => (
          <div
            key={i}
            style={{
              background: "white",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* LEFT */}
            <div>
              <h3>{b.title}</h3>
              <p>{b.details}</p>
              <p style={{ fontSize: "12px", color: "gray" }}>
                📅 {b.date}
              </p>
            </div>

            {/* RIGHT */}
            <div style={{ textAlign: "right" }}>
              <span
                style={{
                  padding: "5px 10px",
                  borderRadius: "20px",
                  background: badgeColor(b.type),
                  color: "white",
                  fontSize: "12px",
                }}
              >
                {b.type}
              </span>

              <h3 style={{ marginTop: "10px" }}>₹{b.price}</h3>

              <p style={{ color: "green", fontSize: "12px" }}>
                ✅ Confirmed
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingHistory;