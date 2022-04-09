import { Modal } from '../../context/Modal';
import { useState } from 'react';
import EditReviewForm from './EditReview';

function EditReviewModal ({ review }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="editReview" onClick={() => setShowModal(true)}>
        Edit Review
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReviewForm  hideModal={() => setShowModal(false)} review={review} />
        </Modal>
      )}
    </>
  )
}

export default EditReviewModal;
