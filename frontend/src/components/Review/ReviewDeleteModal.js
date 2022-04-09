import { Modal } from '../../context/Modal';
import { useState } from 'react';
import DeleteReviewForm from './ReviewDeleteForm';

function DeleteReviewModal ({ review }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="deleteReview" onClick={() => setShowModal(true)}>
        Delete Review
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteReviewForm  hideModal={() => setShowModal(false)} review={review} />
        </Modal>
      )}
    </>
  )
}

export default DeleteReviewModal;
