import { useState } from "react";
import { Modal } from "../../context/Modal"
import BusinessDetail from "./BusinessDetail"

export default function BusinessModal({business, reviews, sessionUser }) {
    const [showModal, setShowModal] = useState(false);
    return (
      <>
      <img id="businessImage" className={business.id} src={business?.imageUrl}
        alt="" onClick={() => setShowModal(true)}></img>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <BusinessDetail business={business} reviews={reviews} sessionUser={sessionUser} />
          </Modal>
      )}
      </>
    )
}
