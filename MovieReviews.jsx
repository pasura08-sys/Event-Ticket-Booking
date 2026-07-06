import { useState } from "react";

function MovieReviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      movie: "Avengers: Endgame",
      review: "Amazing action and emotional ending!",
      rating: 5,
    },
    {
      id: 2,
      movie: "Pushpa 2",
      review: "Great performance and music.",
      rating: 4,
    },
  ]);

  const [movie, setMovie] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);
  const [editingId, setEditingId] = useState(null);

  const addReview = () => {
    if (!movie || !reviewText) {
      alert("Please fill all fields");
      return;
    }

    const newReview = {
      id: Date.now(),
      movie,
      review: reviewText,
      rating,
    };

    setReviews([...reviews, newReview]);
    setMovie("");
    setReviewText("");
    setRating(5);
  };

  const editReview = (review) => {
    setMovie(review.movie);
    setReviewText(review.review);
    setRating(review.rating);
    setEditingId(review.id);
  };

  const updateReview = () => {
    setReviews(
      reviews.map((review) =>
        review.id === editingId
          ? {
              ...review,
              movie,
              review: reviewText,
              rating,
            }
          : review
      )
    );

    setEditingId(null);
    setMovie("");
    setReviewText("");
    setRating(5);
  };

  const deleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Movie Reviews</h2>

      <input
        type="text"
        placeholder="Movie Name"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <textarea
        placeholder="Write Here"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        rows="4"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        <option value={1}>🌟1 Star</option>
        <option value={2}>🌟2 Stars</option>
        <option value={3}>🌟3 Stars</option>
        <option value={4}>🌟4 Stars</option>
        <option value={5}>🌟5 Stars</option>
      </select>

      <br />
      <br />

      {editingId ? (
        <button onClick={updateReview}>
          Update Review
        </button>
      ) : (
        <button onClick={addReview}>
          Add Review
        </button>
      )}

      <hr />

      {reviews.map((review) => (
        <div
          key={review.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{review.movie}</h3>

          <p>{"⭐".repeat(review.rating)}</p>

          <p>{review.review}</p>

          <button
            onClick={() => editReview(review)}
            style={{ marginRight: "10px" }}
          >
            Edit 
          </button>

          <button
            onClick={() => deleteReview(review.id)}
          >
            Delete 
          </button>
        </div>
      ))}
    </div>
  );
}

export default MovieReviews;