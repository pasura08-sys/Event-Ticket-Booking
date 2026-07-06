import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import EventDetails1 from "./pages/EventDetails1"
import EventDetails2 from "./pages/EventDetails2"
import EventDetails3 from "./pages/EventDetails3"
import SeatMap from "./pages/SeatMap"
import SeatMap2 from "./pages/SeatMap2"
import SeatMap3 from "./pages/SeatMap3"
import BookingHistory from "./pages/BookingHistory";
import MovieReviews from "./components/MovieReviews";


function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "login" && <Login />}

      {page === "signup" && <Signup />}

      {page === "home" && <Home /> }

      {page === "movies" && (
  <div>
    <EventDetails1 />
    <SeatMap />
    <BookingHistory/>
  </div>
)}

      
      {page === "concerts" && (
  <div>
    <EventDetails2 />
    <SeatMap2 />
    <BookingHistory/>
  </div>
)}

      {page === "sports" && (
  <div>
    <EventDetails3 />
    <SeatMap3 />
    <BookingHistory/>
  </div>

      )}
       {page === "reviews" && <MovieReviews />}
     
      </div>
  );
}

export default App;