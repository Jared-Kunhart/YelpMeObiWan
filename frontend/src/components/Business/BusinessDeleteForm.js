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
    <form id="delete_business_form" onSubmit={handleSubmit}>
      <h3>Are you sure you want to delete <p id="delete_business_title">{business.title} ?</p></h3>
      <div id="delete_business_buttons">
      <button id="delete" className="deleteButton" type="submit">Confirm Delete</button>
      <button id="cancel" className="cancelDelete" onClick={handleCancelClick}>Cancel</button>
      </div>
    </form>
  )
}

export default DeleteBusinessForm;
