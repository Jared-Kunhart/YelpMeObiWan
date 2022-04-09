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
    <form onSubmit={handleSubmit}>
      <h3>Delete this Review ?</h3>
      <button className="deleteButton" type="submit">Confirm Delete</button>
      <button className="cancel" onClick={handleCancelClick}>Cancel</button>
    </form>
  )
}

export default DeleteReviewForm;
