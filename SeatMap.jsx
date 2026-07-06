import { useState, useEffect } from "react";

function SeatMap() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [seatCount, setSeatCount] = useState(0);
  const [showPayment, setShowPayment] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const movies = [
    {
      title: "Avengers Endgame",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500",
      price: 250,
    },
    {
      title: "Pushpa 3",
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500",
      price: 300,
    },
    {
      title: "Interstellar",
      image:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500",
      price: 350,
    },
    {
      title: "Inception",
      image:
        "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=500",
      price: 280,
    },
    {
      title: "The Dark Knight",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500",
      price: 320,
    },
  ];

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const mockReviews = [
    {
      id: 1,
      name: "Eliseo",
      email: "Eliseo@gardner.biz",
      body: "Amazing visuals and story!",
    },
    {
      id: 2,
      name: "Jayne",
      email: "Jayne_Kuhic@sydney.com",
      body: "Loved it, but a bit long.",
    },
    {
      id: 3,
      name: "Nikita",
      email: "Nikita@garfield.biz",
      body: "I am a bit Disappointing",
    },
    {
      id: 4,
      name: "Lew",
      email: "Lew@alysha.tv",
      body: "Could watch it again and again.",
    },
    {
      id: 5,
      name: "Hayden",
      email: "Hayden@althea.biz",
      body: "One of the best movies ever!",
    },
  ];

  useEffect(() => {
    if (selectedMovie) {
      setReviews(mockReviews);
    }
  }, [selectedMovie]);

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
      alert("Please select a movie and seats first");
      return;
    }
    setShowPayment(true);
  };

  const handlePayment = () => {
    if (!cardNumber || !nameOnCard || !expiry || !cvv) {
      alert("Please fill all payment details");
      return;
    }

    alert(
      `✅ Payment Successful!
Movie: ${selectedMovie.title}
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
    setReviews([]);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>🎬 Select Movie</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />

      {filteredMovies.length === 0 && (
        <p style={{ color: "black" }}>No movies found </p>
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
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
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
          <h2 style={{ marginTop: "30px" }}>⭐ Reviews</h2>

          {reviews.map((review) => (
            <div
              key={review.id}
              style={{
                maxWidth: "600px",
                margin: "10px auto",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <strong>{review.name}</strong>
              <p>{review.body}</p>
            </div>
          ))}

          <h2 style={{ marginTop: "30px" }}>
            Select Number of Seats
          </h2>

          <div style={{ margin: "20px" }}>
            <button onClick={decreaseSeats}>➖</button>

            <span
              style={{
                margin: "0 20px",
                fontSize: "20px",
              }}
            >
              {seatCount}
            </span>

            <button onClick={increaseSeats}>➕</button>
          </div>

          <h3>
            Selected: {selectedMovie.title} — {seatCount} seat(s)
          </h3>

          {seatCount > 0 && (
            <h3>Total Price: ₹{totalPrice}</h3>
          )}

          <button
            onClick={proceedToPayment}
            style={{
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
          <h2> Payment Details</h2>

          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
            }}
          />

          <input
            type="text"
            placeholder="Name on Card"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
            }}
          />

          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
            }}
          />

          <input
            type="password"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
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