import { Modal } from '../../context/Modal';
import { useState } from 'react';
import CreateReviewForm from './CreateReview';

function CreateReviewModal ({ business }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="review_button" className="postReview" onClick={() => setShowModal(true)}>
        Post Review
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReviewForm  hideModal={() => setShowModal(false)} business={business} />
        </Modal>
      )}
    </>
  )
}

export default CreateReviewModal;
