import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/review";
import { Rating } from 'react-simple-star-rating'
import "./ModalMobileStyle.css"

function CreateReviewPage({ hideModal, business }) {
  const dispatch = useDispatch();
  const reviews = useSelector(state => Object.values(state.review))
  const businessId = business.id
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState([]);

  const handleRating = (rate = Number) => setRating(rate)

  useEffect(() => {
    let errors = [];
    if (content.length < 3) errors.push("*DrruurRRP tanaNDuh?*:  Add a review")
    if (content.length > 75) errors.push("*Beep-bee-bee-boop-bee-doo-weep*: Content too long")
    if (rating === 0) errors.push("*beep boop*: Add a rating")
    setErrors(errors)
  }, [content, rating])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const review = {
        content,
        rating,
        businessId
    };

    await dispatch(createReview(review));
    hideModal()
  };

  const handleCancelClick = (e) => {
    e.preventDefault()
    hideModal()
  };

  return (
    <form id="post_form_review" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error) => <li key={error}>{error}</li>)}
      </ul>
    <div id="reviewForm">
      <label>
        Review:
        <input
          id="input_review"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <label>
        Rating:
        <Rating
              id='review_rating_stars'
              onClick={handleRating}
              ratingValue={rating}
              transition
              showTooltip
              tooltipDefaultText={'Beskar Ingots'}
              tooltipArray={['1 out of 5 Beskar Ingots', '2 out of 5 Beskar Ingots', '3 out of 5 Beskar Ingots', '4 out of 5 Beskar Ingots', '5 of 5 Beskar Ingots']}
              size={35}
              emptyIcon={<img src="/images/ingotfull.png" size={10} />}
              fullIcon={<img src="/images/ingotempty.png" size={100} />}
              fillColorArray={['#780505ac', '#9f0707ac', '#b40707c0', '#d20404d3', '#ff0000fd']}
            />
      </label>
      <button id="review_button" type="submit" disabled={errors.length > 0}>Post Review</button>
      <button id="cancel" type="button" onClick={handleCancelClick}>Cancel</button>
    </div>
    </form>
  );
}

export default CreateReviewPage;
