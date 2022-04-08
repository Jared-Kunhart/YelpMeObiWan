import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { deleteBusiness } from '../../store/business';
import EditBusiness from './EditBusiness';
import Reviews from '../Review';
// import { getOneBusiness } from '../../store/business';
import './BusinessDetail.css'

const BusinessDetail = () => {
  const history = useHistory()
  const { businessId } = useParams()
  const business = useSelector(state => state.business[businessId]);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (businessId) => {
    dispatch(deleteBusiness(businessId));
    history.push('/')
  };
  return (
    <div className='business-detail'>
      <img id="imageUrl" src={business?.imageUrl} alt='' />
      <span className='business-title'>{business?.title}</span>
      <p>{business?.description}</p>
      <p>{business?.location}</p>
      <div className='button-row'>
        <button onClick={() => handleDelete(businessId)} className='delete-button'>
          Delete Business
        </button>
        <button onClick={() => setShowModal(true)}>Edit Business</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditBusiness business={business} hideModal={() => setShowModal(false)} />
        </Modal>
      )}
      <div>
        <Reviews />
      </div>
      </div>
    </div>
  );
};
export default BusinessDetail;
