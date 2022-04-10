import { useDispatch } from "react-redux";
import { deleteReview } from "../../store/review";

function DeleteReviewForm ({ hideModal, review }) {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
      dispatch(deleteReview(review.id))
      hideModal();
  }
  const handleCancelClick = (e) => {
    e.preventDefault()
    hideModal();
  };

  return (
    <form id="delete_review_form" onSubmit={handleSubmit}>
      <h3>Delete this Review ?</h3>
      <div id="delete_review_div">
      <button id="delete" className="deleteButton" type="submit">Confirm Delete</button>
      <button id="cancel" className="cancel_review_button" onClick={handleCancelClick}>Cancel</button>
      </div>
    </form>
  )
}

export default DeleteReviewForm;
