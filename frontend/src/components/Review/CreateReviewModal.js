import { Modal } from '../../context/Modal';
import { useState } from 'react';
import CreateReviewForm from './CreateReview';

function CreateReviewModal ({ review }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="postReview" onClick={() => setShowModal(true)}>
        Post Review
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReviewForm  hideModal={() => setShowModal(false)} review={review} />
        </Modal>
      )}
    </>
  )
}

export default CreateReviewModal;
