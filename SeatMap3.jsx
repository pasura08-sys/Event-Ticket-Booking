import { useState } from "react";

function SeatMap() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [seatCount, setSeatCount] = useState(0);
  const [showPayment, setShowPayment] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const sportsEvents = [
    {
      title: "IPL Final",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
      price: 2500,
    },
    {
      title: "India vs Australia ODI",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da",
      price: 1800,
    },
    {
      title: "Pro Kabaddi League",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/919-9198627_the-league-will-continue-its-existing-format-and.png",
      price: 1200,
    },
    {
      title: "ISL Football Final",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
      price: 1500,
    },
    {
      title: "Badminton Championship",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea",
      price: 1000,
    },
  ];

  const filteredEvents = sportsEvents.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const increaseSeats = () => setSeatCount(seatCount + 1);
  const decreaseSeats = () => {
    if (seatCount > 0) setSeatCount(seatCount - 1);
  };

  const totalPrice = selectedEvent ? seatCount * selectedEvent.price : 0;

  const proceedToPayment = () => {
    if (!selectedEvent || seatCount === 0) {
      alert("Please select an event and seats first");
      return;
    }
    setShowPayment(true);
  };

  const handlePayment = () => {
    if (!cardNumber || !nameOnCard || !expiry || !cvv) {
      alert(" Please fill all payment details");
      return;
    }

    alert(
      `✅ Payment Successful!
Event: ${selectedEvent.title}
Seats: ${seatCount}
Total Paid: ₹${totalPrice}`
    );

    // Reset state
    setSelectedEvent(null);
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
      <h2>🏟 Select Sports Event</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search Event..."
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

      {filteredEvents.length === 0 && (
        <h3 style={{ color: "red" }}>No Event Found 😔</h3>
      )}

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredEvents.map((event, i) => (
          <div
            key={i}
            onClick={() => {
              setSelectedEvent(event);
              setSeatCount(0);
              setShowPayment(false);
            }}
            style={{
              width: "220px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              cursor: "pointer",
              background:
                selectedEvent?.title === event.title ? "#e6ffe6" : "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={event.image}
              alt={event.title}
              width="100%"
              height="140"
              style={{
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />

            <h4>{event.title}</h4>
            <p>₹{event.price} per seat</p>
          </div>
        ))}
      </div>

      {selectedEvent && !showPayment && (
        <>
          <h2 style={{ marginTop: "30px" }}>Select Number of Seats</h2>

          <div style={{ margin: "20px" }}>
            <button onClick={decreaseSeats} style={{ marginRight: "10px" }}>
              ➖
            </button>

            <span style={{ fontSize: "20px" }}>{seatCount} seat(s)</span>

            <button onClick={increaseSeats} style={{ marginLeft: "10px" }}>
              ➕
            </button>
          </div>

          <h3>
            Selected: {selectedEvent.title} — {seatCount} seat(s)
          </h3>

          {seatCount > 0 && <h4>Total Price: ₹{totalPrice}</h4>}

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
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />

          <label>Name on Card:</label>
          <input
            type="text"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />

          <label>Expiry (MM/YY):</label>
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />

          <label>CVV:</label>
          <input
            type="password"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
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
