import { useDispatch } from 'react-redux';
import { deleteBusiness } from '../../store/business';
import { Modal } from '../../context/Modal';
import EditBusiness from './EditBusiness';
import { useState } from 'react';
import './BusinessDetail.css'

const BusinessDetail = ({ id, title, description, location, imageUrl }) => {
  const business = { id, title, description, location, imageUrl }
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBusiness(id));
  };
  return (
    <div className='business-detail'>
      <img id="imageUrl" src={imageUrl} />
      <span className='business-title'>{title}</span>
      <p>{description}</p>
      <p>{location}</p>
      <div className='button-row'>
        <button onClick={() => handleDelete(id)} className='delete-button'>
          Delete
        </button>
        <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditBusiness business={business} hideModal={() => setShowModal(false)} />
        </Modal>
      )}
      </div>
    </div>
  );
};
export default BusinessDetail;
