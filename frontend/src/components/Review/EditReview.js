import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editReview } from "../../store/review";
import '../../index.css'


function EditReviewPage({ review, hideModal }) {
  const dispatch = useDispatch();
  const reviews = useSelector(state => Object.values(state.review))
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    let errors = [];
    if (content.length < 3) errors.push("*DrruurRRP tanaNDuh?*: Did you plug it in? (Add a review)")
    if (content.length > 75) errors.push("*Beep-bee-bee-boop-bee-doo-weep*: Content too long")
    if (rating.length < 1) errors.push("*beep boop*: Add some creds (Add a rating)")
    if (rating > 10) errors.push("Sprrpft! Phooey!: (Rating has to be less than 10)")
    if (!Number(rating)) errors.push("Wrrk-wrrk: (Must be a Number)")
    setErrors(errors)
  }, [content, rating])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
        ...review,
        content,
        rating,
    };

    await dispatch(editReview(payload));
    hideModal()
  };

  const handleCancelClick = (e) => {
    e.preventDefault()
    hideModal()
  };

  return (
    <form id="edit_form_review" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error) => <li key={error}>{error}</li>)}
      </ul>
    <div id="reviewForm">
      <label>
        Review:
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <label>
        Rating:
        <input
          type="text"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </label>
      <button id="review_button" type="submit" disabled={errors.length > 0}>Update Review</button>
      <button id="cancel" type="button" onClick={handleCancelClick}>Cancel</button>
    </div>
    </form>
  );
}

export default EditReviewPage;
