'use client';
import React from 'react';
import { useState } from 'react';

export default function RatingForm() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert(`You rated ${rating} star(s) and commented: "${comment}"`);
    setRating(0); // Reset the rating
    setComment(''); // Clear the textarea
  };
  return (
    <>
      <div className="rating-form-wrapper">
        <form onSubmit={handleSubmit}>
          {/* Rating Section */}
          <div className="rating" style={{ direction: 'rtl', display: 'flex' }}>
            {[5, 4, 3, 2, 1].map((value) => (
              <React.Fragment key={value}>
                <input
                  type="radio"
                  id={`star${value}`}
                  name="rating"
                  value={value}
                  style={{ display: 'none' }}
                  onChange={() => setRating(value)}
                />
                <label
                  htmlFor={`star${value}`}
                  style={{
                    fontSize: '2rem',
                    color: value <= rating ? '#000000' : '#dcdcdc',
                    cursor: 'pointer',
                  }}
                >
                  &#9733;
                </label>
              </React.Fragment>
            ))}
          </div>

          {/* Comment Section */}
          <div className="comment">
            <textarea
              id="commentTextarea"
              className="form-control"
              placeholder="Write your comment here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
