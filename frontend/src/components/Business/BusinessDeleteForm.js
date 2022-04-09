import { useDispatch } from "react-redux";
import { deleteBusiness } from '../../store/business'

function DeleteBusinessForm ({ hideModal, business }) {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
      dispatch(deleteBusiness(business.id))
      hideModal();
  }
  const handleCancelClick = (e) => {
    e.preventDefault()
    hideModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Are you sure you want to delete {business.title}</h3>
      <button className="deleteButton" type="submit">Confirm Delete</button>
      <button className="cancel" onClick={handleCancelClick}>Cancel</button>
    </form>
  )
}

export default DeleteBusinessForm;