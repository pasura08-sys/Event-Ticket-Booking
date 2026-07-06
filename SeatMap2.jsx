import { useState } from "react";

function SeatMap() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [seatCount, setSeatCount] = useState(0);
  const [showPayment, setShowPayment] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const movies = [
    {
      title: "Arijit Singh Live",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=500",
      price: 999,
    },
    {
      title: "Anirudh Concert",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
      price: 1200,
    },
    {
      title: "Rock Music Festival",
      image:
        "https://images.unsplash.com/photo-1501612780327-45045538702b?w=500",
      price: 1500,
    },
    {
      title: "Ye Live in India – Kanye West",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsi80yyr368EXrs0gmfjWsjFlc9LnTc7RMtA&s",
      price: 6000,
    },
    {
      title: "Feeding India Concert – Shakira",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdgYmBmHR-MRJV6A2UCkn9LCPpGdLPRs-Og&s",
      price: 5000,
    },
  ];

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const increaseSeats = () => setSeatCount(seatCount + 1);

  const decreaseSeats = () => {
    if (seatCount > 0) {
      setSeatCount(seatCount - 1);
    }
  };

  const totalPrice = selectedMovie
    ? seatCount * selectedMovie.price
    : 0;

  const proceedToPayment = () => {
    if (!selectedMovie || seatCount === 0) {
      alert("⚠ Please select a concert and seats first");
      return;
    }
    setShowPayment(true);
  };

  const handlePayment = () => {
    if (!cardNumber || !nameOnCard || !expiry || !cvv) {
      alert("⚠ Please fill all payment details");
      return;
    }

    alert(
      `✅ Payment Successful!
Concert: ${selectedMovie.title}
Seats: ${seatCount}
Total Paid: ₹${totalPrice}`
    );

    setSelectedMovie(null);
    setSeatCount(0);
    setShowPayment(false);
    setCardNumber("");
    setNameOnCard("");
    setExpiry("");
    setCvv("");
    setSearchTerm("");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>🎤 Select Concert</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search Concert..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "320px",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      {filteredMovies.length === 0 && (
        <h3 style={{ color: "red" }}>No Concert Found 😔</h3>
      )}

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredMovies.map((movie, i) => (
          <div
            key={i}
            onClick={() => {
              setSelectedMovie(movie);
              setSeatCount(0);
              setShowPayment(false);
            }}
            style={{
              width: "220px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              cursor: "pointer",
              background:
                selectedMovie?.title === movie.title
                  ? "#e6ffe6"
                  : "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              width="100%"
              height="140"
              style={{
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />

            <h4>{movie.title}</h4>
            <p>₹{movie.price} per seat</p>
          </div>
        ))}
      </div>

      {selectedMovie && !showPayment && (
        <>
          <h2 style={{ marginTop: "30px" }}>
            Select Number of Seats
          </h2>

          <div style={{ margin: "20px" }}>
            <button
              onClick={decreaseSeats}
              style={{ marginRight: "10px" }}
            >
              ➖
            </button>

            <span style={{ fontSize: "20px" }}>
              {seatCount} seat(s)
            </span>

            <button
              onClick={increaseSeats}
              style={{ marginLeft: "10px" }}
            >
              ➕
            </button>
          </div>

          <h3>
            Selected: {selectedMovie.title} — {seatCount} seat(s)
          </h3>

          {seatCount > 0 && (
            <h4>Total Price: ₹{totalPrice}</h4>
          )}

          <button
            onClick={proceedToPayment}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "blue",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Proceed to Payment 💳
          </button>
        </>
      )}

      {showPayment && (
        <div
          style={{
            maxWidth: "400px",
            margin: "30px auto",
            textAlign: "left",
          }}
        >
          <h2>Payment Details</h2>

          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
            }}
          />

          <label>Name on Card:</label>
          <input
            type="text"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
            }}
          />

          <label>Expiry (MM/YY):</label>
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
            }}
          />

          <label>CVV:</label>
          <input
            type="password"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
            }}
          />

          <button
            onClick={handlePayment}
            style={{
              width: "100%",
              padding: "12px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Pay ₹{totalPrice} & Book Now 🎟️
          </button>
        </div>
      )}
    </div>
  );
}

export default SeatMap;