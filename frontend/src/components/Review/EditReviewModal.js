import { Modal } from '../../context/Modal';
import { useState } from 'react';
import EditReviewForm from './EditReview';

function EditReviewModal ({ review, sessionUser }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="review_button" className="editReview" onClick={() => setShowModal(true)}>
        Edit Review
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReviewForm  hideModal={() => setShowModal(false)} review={review} sessionUser={sessionUser} />
        </Modal>
      )}
    </>
  )
}

export default EditReviewModal;
